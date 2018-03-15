import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';

export default class ContactsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      value: PropTypes.any,
      pageState: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      name: 'default',
      value: 'default',
      pageState: 'appearing'
    };
  }

  render() {
    return (
      <div className='contact-item'>
        <AnimatedBlock name='contact-item-title' dirrection='left' classMod={this.props.pageState}>
          {this.props.name}:
        </AnimatedBlock>
        <AnimatedBlock name='contact-item-value' dirrection='right' classMod={this.props.pageState}>
          {this.props.value}
        </AnimatedBlock>
      </div>
    );
  }
}