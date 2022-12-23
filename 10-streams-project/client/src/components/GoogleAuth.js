import React from "react";

class GoogleAuth extends React.Component {
  // set to null because we don't know if user is signed in or not on app load
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // will return a promise once client library has been successfully initialized
      window.gapi.client
        .init({
          clientId:
            "155797743526-tk4mt6klbtiaj833elce7frl0i072h04.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        // will invoke once promise is returned
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // update auth state on page without having to refresh browser
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        // we don't have "()" after the onSignOut function because
        // we don't want it to be called the instant the component is rendered to the screen
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
