import React from "react";
import { connect } from "react-redux";

// we don't need the user header component to fetch it's own data
// this is because we have a single action creator that fetches all of our data for us (fetchPostsAndUsers)
class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// ownProps is a reference to the props that are about to be sent into the component above
// now we don't have to pass a bunch of data into the component (improves reusability)
// mapStateToProps is for extracting anything that's going to do computation on our state
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
