import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // return early if user "ctrl/command clicks" a link
    // to open up a new tab
    if (event.metaKay || event.ctrlKey) {
      return;
    }

    // prevents full page reload
    event.preventDefault();
    // changes the url without doing a page reload
    window.history.pushState({}, "", href);

    // communicates to components that route has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
