import React from 'react';
import PropTypes from 'prop-types';
import './MyWorksPage.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper.js';

export default class MyWorksPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    classMod: PropTypes.string
  }

  static get defaultProps() {
    classMod: 'appearing-'
  }

  render() {
    return (
      <div className='works-page'>
        <AnimatedBlock 
          name='works-title' 
          classMod={this.props.classMod} 
          dirrection='top'
        >
          <h1>
            MY WORKS
          </h1>
        </AnimatedBlock>

        <ProjectsWrapper classMod={this.props.classMod} />

        <AnimatedBlock 
          name='works-page-after-text' 
          classMod={this.props.classMod} 
          dirrection='place'
        >
          All additional information and links to the project, are available in the description, when clicking on it.
        </AnimatedBlock>
      </div>
    );
  }
}