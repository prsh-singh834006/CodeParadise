import React from 'react';
import Form from '../Form';
import { FireBaseContext } from '../../firebaseContext';

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
        {isOpen ? (
          <div className={modalClassName}>
            <div className="modal-background" />
            <div className="modal-content bgcolor-white padding-all--md">
              <FireBaseContext.Consumer>
                {firebase => <Form firebase={firebase} />}
              </FireBaseContext.Consumer>
            </div>
            <button
              onClick={this.handleClose}
              className="modal-close is-large"
              aria-label="close"
            />
          </div>
        ) : null}

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
