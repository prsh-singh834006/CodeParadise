import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav role="navigation" className="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#section-about">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
