import React from 'react';
import './ProjectsLoader.scss';

export default class ProjectsLoader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects-loader-wrapper'>
        <span className="loader-pr"><span className="loader-pr-inner"></span></span>
      </div>
    );
  }
}