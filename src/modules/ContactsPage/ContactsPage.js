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
    const email = <a title='Email' href='mailto:homspage.work@gmail.com'>homspage.work@gmail.com</a>
    const telegram = <a title='Telegram' href='tg://resolve?domain=@evilHoms'>@evilHoms</a>
    const facebook = <a title='facebook' href='https://facebook.com/evilHoms' target='_blank'>facebook.com/evilHoms</a>

    return (
      <div className='contacts-page'>
        <AnimatedBlock name='contacts-title' classMod={this.props.classMod} dirrection='top'>
          <h1>
            CONTACTS
          </h1>
        </AnimatedBlock>

        <ContactsWrapper>
          <ContactItem name='email' value={email} pageState={this.props.classMod} />
          <ContactItem name='telegram' value={telegram} pageState={this.props.classMod} />
          <ContactItem name='facebook' value={facebook} pageState={this.props.classMod} />
        </ContactsWrapper>

        <AnimatedBlock name='contacts-after-text' dirrection='place' classMod={this.props.classMod}>
          <p>My name is Igor</p> 
          <p>I'm the one you need!</p>
          <p>If you have a project that you want to get started, think you need my help</p>
          <p>with something or just fancy saying hey, then get in touch.</p>

          <a href='mailto:homspage.work@gmail.com'>
            <button className='contacts-message-btn'>
              Message Me
            </button>
          </a>

        </AnimatedBlock>
      </div>
    );
  }
}