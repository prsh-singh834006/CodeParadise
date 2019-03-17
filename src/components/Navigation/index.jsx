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
            <a href="#" className="navigation-link">
              <li>Home</li>
            </a>
            <a href="#section-about" className="navigation-link">
              <li>About</li>
            </a>
            <a href="#section-myskills" className="navigation-link">
              <li>Skills</li>
            </a>
            <a href="#" className="navigation-link">
              <li>Tech Stack</li>
            </a>
            <a href="#" target="_blank" className="navigation-link">
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
