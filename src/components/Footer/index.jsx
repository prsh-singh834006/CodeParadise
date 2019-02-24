import React from 'react';

class Footer extends React.PureComponent {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({
      ...this.state,
      isOpen: true,
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      isOpen: false,
    });
  };

  render() {
    const { isOpen } = this.state;

    let modalClassName = 'modal';

    if (isOpen) {
      modalClassName = 'modal is-active';
    }

    return (
      <footer className="footer">
        <div className={modalClassName}>
          <div className="modal-background" />
          <div className="modal-content bgcolor-white padding-all--md">
            <div classNameName="">
              <form>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Text input"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Textarea" />
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
            </div>
          </div>
          <button
            onClick={this.handleClose}
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
        <div className="text--center hireme">
          <button className="btn btn-primary" onClick={this.handleOpen}>
            Send me a Message
          </button>
        </div>
        <div className="text--center container">
          <div classNameName="social-icons margin-bottom--lg">
            <a href="#" className="social-item">
              <span className="icon">
                <i className="fab fa-facebook-square" />{' '}
              </span>
            </a>
            <a href="#" className="social-item">
              <span className="icon">
                <i classame="fab fa-github" />{' '}
              </span>
            </a>
            <a href="#" className="social-item">
              <span className="icon">
                <i className="fab fa-linkedin" />{' '}
              </span>
            </a>
          </div>

          <p className="text--center">
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
      </footer>
    );
  }
}

export default Footer;
