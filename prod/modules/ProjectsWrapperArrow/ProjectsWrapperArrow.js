import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsWrapperArrow.scss';

export default class ProjectsWrapperArrow extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      side: PropTypes.oneOf(['left', 'right']),
      onClick: PropTypes.func,
      symbol: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      side: 'left',
      onClick: () => {console.log('empty onClick')},
      symbol: 'x'
    }
  }

  render() {
    return (
      <div 
        className={`projects-wrapper-arrow arrow-${this.props.side === 'left' ? 'left' : 'right'}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}