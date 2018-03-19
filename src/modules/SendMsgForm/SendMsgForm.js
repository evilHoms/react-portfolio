import React from 'react';
import PropTypes from 'prop-types';
import './SendMsgForm.scss';

export default class SendMsgForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textCols: '0'
    }
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
    const textValue = this.textArea.value;
    this.setState({
      text: textValue
    });
    const body = {
      text: textValue
    }
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => {
        console.log(res);
        this.setState({
          text: 'Your message was sent'
        });
        this.textArea.value = 'Your message was sent';
      })
      .catch(console.log);
  }

  onResize() {
    this.setState({
      textCols: window.innerWidth > 450 ? '40' : '30'
    });
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  render() {
    return (
      <form className='send-msg-form'>
        <textarea 
          className='send-msg-textarea' 
          ref={el => this.textArea = el}
          placeholder='Enter your message here' 
          rows='4' 
          cols={this.state.textCols}
        >
        </textarea>
        <button className='send-msg-btn' onClick={(e) => this.sendData(e, this.props.apiUrl)}>
          Send Message
        </button>
      </form>
    );
  }
}