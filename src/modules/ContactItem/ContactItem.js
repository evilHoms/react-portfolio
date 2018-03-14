import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';

export default class ContactsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      value: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      name: 'default',
      value: 'default'
    };
  }

  render() {
    return (
      <div className='contact-item'>
        <p className='contact-item-title'>
          {this.props.name}:
        </p>
        <p className='contact-item-value'>
          {this.props.value}
        </p>
      </div>
    );
  }
}