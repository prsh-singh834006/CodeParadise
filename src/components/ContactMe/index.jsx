import React from 'react';

const ContactMe = () => (
  <section class="site-section bg-light" id="section-contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="section-heading text-center">
            <h2>
              Wanna <strong>Start Work</strong> With Me?
            </h2>
          </div>
        </div>
        <div class="col-md-7 mb-5 mb-md-0">
          <form action="" class="site-form">
            <h3 class="mb-5">Get In Touch</h3>
            <div class="form-group">
              <input
                class="form-control px-3 py-4"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control px-3 py-4"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div class="form-group">
              <input
                class="form-control px-3 py-4"
                placeholder="Your Phone"
                type="email"
              />
            </div>
            <div class="form-group mb-5">
              <textarea
                class="form-control px-3 py-4"
                cols="30"
                rows="10"
                placeholder="Write a Message"
              />
            </div>
            <div class="form-group">
              <input
                class="btn btn-primary  px-4 py-3"
                value="Send Message"
                type="submit"
              />
            </div>
          </form>
        </div>
        <div class="col-md-5 pl-md-5">
          <h3 class="mb-5">My Contact Details</h3>
          <ul class="site-contact-details">
            <li>
              <span class="text-uppercase">Email</span>
              prashant13cse075@gmail.com
            </li>
            <li>
              <span class="text-uppercase">Phone</span>
              +91 787 323 0960
            </li>
            <li>
              <span class="text-uppercase">Fax</span>
              +91 787 323 0960
            </li>
            <li>
              <span class="text-uppercase">Address</span>
              6th Cross, Ambedkarnagar <br />
              Whitefield <br />
              Karnataka, Bangaluru
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;
