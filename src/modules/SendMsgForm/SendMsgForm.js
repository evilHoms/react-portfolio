import React from 'react';
import PropTypes from 'prop-types';
import './SendMsgForm.scss';

export default class SendMsgForm extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      inputStyles: PropTypes.object,
      sendBtnStyles: PropTypes.object,
      apiUrl: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      inputStyles: {},
      sendBtnStyles: {},
      apiUrl: 'default'
    };
  }

  sendData(e, apiUrl) {
    e.preventDefault();
    console.log('send to ' + apiUrl);
  }

  render() {
    return (
      <form className='send-msg-form'>
        <textarea className='send-msg-textarea' placeholder='Enter your message here' rows='6' cols='40'>
        </textarea>
        <button className='send-msg-btn' onClick={(e) => this.sendData(e, this.props.apiUrl)}>
          Send Message
        </button>
      </form>
    );
  }
}