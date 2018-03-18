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

  render() {
    return (
      <form className='send-msg-form'>
        <textarea className='send-msg-textarea' defaultValue='some message'>
        </textarea>
        <button className='send-msg-btn'>
          send
        </button>
      </form>
    );
  }
}