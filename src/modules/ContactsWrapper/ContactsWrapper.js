import React from 'react';
import PropTypes from 'prop-types';
import './ContactsWrapper.scss';

export default class ContactsWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {

    };
  }

  static get defaultProps() {
    return {

    };
  }

  render() {
    return (
      <div className='contacts-wrapper'>
        {this.props.children}
      </div>
    );
  }
}