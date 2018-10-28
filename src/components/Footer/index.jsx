import React from 'react';

const Footer = () => (
  <footer class="site-footer">
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-12 text-center">
          <p>
            <a href="#" class="social-item">
              <span class="icon-facebook2" />
            </a>
            <a href="#" class="social-item">
              <span class="icon-twitter" />
            </a>
            <a href="#" class="social-item">
              <span class="icon-instagram2" />
            </a>
            <a href="#" class="social-item">
              <span class="icon-linkedin2" />
            </a>
            <a href="#" class="social-item">
              <span class="icon-vimeo" />
            </a>
          </p>
        </div>
      </div>
      <div class="row">
        <p class="col-12 text-center">
          Copyright ©{' '}
          <script
            type="text/javascript"
            async=""
            src="https://www.google-analytics.com/analytics.js"
          />
          <script>document.write(new Date().getFullYear());</script>
          2018 All rights reserved
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
