import React from 'react';
import PropTypes from 'prop-types';

export default class AutoSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      items: PropTypes.array,
      period: PropTypes.number
    };
  }

  static get defaultProps() {
    return {
      items: [],
      period: 1000
    };
  }

  render() {
    return (
      <div>
        {this.props.items}
      </div>
    );
  }
}