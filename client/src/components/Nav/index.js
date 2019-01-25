import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        GBooks Search Demo
      </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">Search for Books</a>
            <a className="nav-link" href="/books">View Saved Books</a>
          </div>
        </div>
    </nav>
  );
}

export default Nav;
