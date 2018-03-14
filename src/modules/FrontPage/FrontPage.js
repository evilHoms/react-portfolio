import React from 'react';
import PropTypes from 'prop-types';
import './FrontPage.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }
  // КлассМод передаем через props
  // hidden-element только, пока падает начальный блок, потом либо анимация, либо ничего.
  render() {
    return (
      <div className='front-page'>
        <AnimatedBlock name='front-title' classMod={this.props.classMod} dirrection='top'>
          <h1>
            I'm Igor
          </h1>
          <h2>
            Frontend developer
          </h2>
        </AnimatedBlock>

        <AnimatedBlock name='text-left' classMod={this.props.classMod} dirrection='left'>
          <h3 className='text-title'>
            Technology stack
          </h3>
          <p className='text'>
            text
          </p>
        </AnimatedBlock>

        <AnimatedBlock name='text-right' classMod={this.props.classMod} dirrection='right'>
          <h3 className='text-title'>
            My experience
          </h3>
          <p className='text'>
            text
          </p>
        </AnimatedBlock>
      </div>
    );
  }
}