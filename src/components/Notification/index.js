import React from 'react';
import { initialize } from '../../initializePushNotification';

const FIREBASE_MESSAGING = initialize();

class Notification extends React.PureComponent {
  state = {
    notification: null,
  };
  componentDidMount() {
    const _this = this;
    FIREBASE_MESSAGING.onMessage(message => {
      _this.setState(prevState => ({
        ...prevState,
        notification: message.notification,
      }));
    });
  }

  clearNotification = () => {
    this.setState(prevState => ({ ...prevState, notification: null }));
  };
  render() {
    const { notification } = this.state;

    if (notification) {
      const { title, body } = notification;

      return (
        <div className="notification is-info push-notification">
          <button className="delete" onClick={this.clearNotification} />
          <h5>{title}</h5>
          <p>{body}</p>
        </div>
      );
    }
    return null;
  }
}

export default Notification;
