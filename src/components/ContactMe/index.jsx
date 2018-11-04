import React from 'react';
import { Formik, Form, Field } from 'formik';

const ContactMe = () => (
  <section className="site-section bg-light" id="section-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-5">
          <div className="section-heading text-center">
            <h2>
              Wanna <strong>Start Work</strong> With Me?
            </h2>
          </div>
        </div>
        <div className="col-md-7 mb-5 mb-md-0">
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            className="site-form"
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <h3 className="mb-5">Get In Touch</h3>
                <div className="form-group">
                  <Field
                    className="form-control px-3 py-4"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <Field
                    className="form-control px-3 py-4"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <Field
                    className="form-control px-3 py-4"
                    placeholder="Your Phone"
                    type="text"
                    name="phone"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    className="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="btn btn-primary  px-4 py-3"
                    value="Send Message"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-md-5 pl-md-5">
          <h3 className="mb-5">My Contact Details</h3>
          <ul className="site-contact-details">
            <li>
              <span className="text-uppercase">Email</span>
              prashant13cse075@gmail.com
            </li>
            <li>
              <span className="text-uppercase">Phone</span>
              +91 787 323 0960
            </li>
            <li>
              <span className="text-uppercase">Fax</span>
              +91 787 323 0960
            </li>
            <li>
              <span className="text-uppercase">Address</span>
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
