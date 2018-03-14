import React from 'react';
import PropTypes from 'prop-types';
import './ContactsPage.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';
import ContactsWrapper from '../ContactsWrapper/ContactsWrapper.js';
import ContactItem from '../ContactItem/ContactItem.js';

export default class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contacts-page'>
        <AnimatedBlock name='contacts-title' classMod={this.props.classMod} dirrection='top'>
          <h1>
            CONTACTS
          </h1>
        </AnimatedBlock>

        <AnimatedBlock 
          name='animated-contacts-wrapper' 
          classMod={this.props.classMod} 
          dirrection='place'
        >
          <ContactsWrapper>
            <ContactItem name='email' value='homspage.work@gmail.com' />
            <ContactItem name='telegram' value='@evilHoms' />
            <ContactItem name='facebook' value='facebook.com/evilHoms' />
          </ContactsWrapper>
        </AnimatedBlock>

        <p>
          bla bla
        </p>

        <button>
          Message Me
        </button>
      </div>
    );
  }
}