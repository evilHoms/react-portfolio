import React from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.scss';
import config from '../../../config.json';

export default class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.itemBgStyle = {
      backgroundImage: `url(${config.api.static}images/${this.props.imageSrc})`
    };

    this.state = {
      stage: 'small'
    }

    this.closeBtn = (
      <button onClick={this.onCloseClick.bind(this)}>
        x
      </button>
    );
  }

  onClick() {
    if (this.state.stage === 'small') {
      this.setState({
        stage: 'big'
      });
      console.log('item clicked');
    }
  }

  onCloseClick(e) {
    e.preventDefault();
    console.log('close item');
    this.setState({
      stage: 'small'
    });
  }

  render() {
    const sizeClass = this.state.stage === 'small' ? 'small-item' : 'big-item';

    return(
      <section 
        className={`project-item ${sizeClass}`} 
        style={this.itemBgStyle}
        onClick={this.onClick.bind(this)}
      >
        {this.state.stage === 'big' && this.closeBtn}
        <h3>
          {this.props.projectName}
        </h3>
        <div className='info'>
          <a className='github' href={this.props.githubHref}>
            {this.props.githubHref}
          </a>
          <a className='demo' href={this.props.projectDemo}>
            {this.props.projectDemo}
          </a>
          <p className='descr'>
            {this.props.description}
          </p>
        </div>
      </section>
    );
  }
}