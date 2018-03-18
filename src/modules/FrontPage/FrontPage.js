import React from 'react';
import PropTypes from 'prop-types';
import './FrontPage.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';
import AutoSlider from '../AutoSlider/AutoSlider.js';
import config from '../../../config.json';

const imagesSrc = [
  config.api.static + '/images/react.png',
  config.api.static + '/images/node.png',
  config.api.static + '/images/express.png',
  config.api.static + '/images/css.png',
  config.api.static + '/images/html.png',
  config.api.static + '/images/sass.png',
  config.api.static + '/images/javascript.png'
];

const sliderConfig = {
  items: imagesSrc.map((el,index) => 
    <img 
      src={el} 
      key={index} 
      style={{
        maxHeight: '100px',
        minHeight: '100px'
      }} 
    />
  ),
  period: 3000,
  style: {
    marginTop: '20px'
  }
}

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
            ReactJs, NodeJs, Express, JavaScript, CSS, Sass, HTML.
          </p>
          <AutoSlider 
            items={sliderConfig.items} 
            period={sliderConfig.period} 
            style={sliderConfig.style}
          />
        </AnimatedBlock>

        <AnimatedBlock name='text-right' classMod={this.props.classMod} dirrection='right'>
          <h3 className='text-title'>
            My experience
          </h3>
          <p className='text'>
            More than two years of successful work in freelancing, more than a year as a web developer in JavaScript.
          </p>
        </AnimatedBlock>

        <AnimatedBlock name='front-after-text' dirrection='place' classMod={this.props.classMod}>
          <p>I'm the one you need!</p>
          <p>If you have a project that you want to get started, think you need my help</p>
          <p>with something or just fancy saying hey, then get in touch.</p>

          <a href='mailto:homspage.work@gmail.com'>
            <button className='front-message-btn'>
              Message Me
            </button>
          </a>

        </AnimatedBlock>
      </div>
    );
  }
}