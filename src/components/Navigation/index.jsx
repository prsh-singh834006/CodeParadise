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
            <a href="#section-myskills">
              <li>Skills</li>
            </a>
            <a href="#">
              <li>Tech Stack</li>
            </a>
            <a href="#" target="_blank">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
