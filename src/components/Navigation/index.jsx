import React from 'react';

const Navigation = () => {
  return (
    <nav
      class="navbar navbar-expand-lg site-navbar navbar-light"
      id="pb-navbar"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <a class="navbar-brand brand" href="index.html">
          Alias
        </a>
        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample09"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#section-home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-myskills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-resume">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#section-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
