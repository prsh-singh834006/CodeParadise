import React from 'react';
import { Formik, Field } from 'formik';

class Form extends React.PureComponent {
  state = {
    submitted: false,
  };

  initialValues = {
    name: '',
    message: '',
  };

  handleSubmit = (values, actions) => {
    const { firebase } = this.props;
    const { name, message } = values;
    const ref = 'user/'.concat(name);
    firebase
      .database()
      .ref(ref)
      .set({
        name,
        message,
        approved: false,
      })
      .then(() => {
        actions.setSubmitting(false);
        this.setState(prevState => ({ ...prevState, submitted: true }));
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div classNameName="cm-form">
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          {({ handleSubmit }) => {
            const { submitted } = this.state;

            if (!submitted) {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <Field
                        name="name"
                        render={({ field }) => (
                          <input
                            className="input"
                            {...field}
                            placeholder="Your name"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <Field
                        name="message"
                        render={({ field }) => (
                          <textarea
                            {...field}
                            className="textarea"
                            placeholder="Textarea"
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="field margin-top--md">
                    <div className="control">
                      <button type="submit" className="btn btn-submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              );
            }

            return (
              <div className="post-submission-screen">
                <h1>Thank you for your valuable feedback</h1>
              </div>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default Form;
