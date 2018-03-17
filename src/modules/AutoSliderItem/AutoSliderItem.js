import React from 'react';
import PropTypes from 'prop-types';
import './AutoSliderItem.scss';

const CLASS_MODS = {
  appearing: 'slide-appearing',
  hidding: 'slide-hidding'
}

export default class AutoSliderItem extends React.Component {
  constructor(props) {
    super(props);
    this.isStable = true;
    this.state = {
      stage: CLASS_MODS.hidding
    }
  }

  static get propTypes() {
    return {
      period: PropTypes.number
    };
  }

  static get defaultProps() {
    return {
      period: undefined
    };
  }

  onAnimationEnd() {
    this.isStable = true;
  }

  componentWillMount() {
    this.mount = true;
    if (this.state.stage === CLASS_MODS.hidding && this.isStable) {
      this.isStable = false;
      this.setState({stage: CLASS_MODS.appearing});
      this.timer = setTimeout(() => {
        if (this.mount) {
          this.setState({
            stage: CLASS_MODS.hidding
          });
        }
      }, this.props.period / 6 * 5);
    }
  }

  componentWillUpdate() {
    this.mount = true;
    if (this.state.stage === CLASS_MODS.hidding && this.isStable) {
      this.isStable = false;
      this.setState({stage: CLASS_MODS.appearing});
      this.timer = setTimeout(() => {
        if (this.mount) {
          this.setState({
            stage: CLASS_MODS.hidding
          });
        }
      }, this.props.period / 6 * 5);
    }
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div 
        style={{animation: `${this.state.stage} ${this.props.period / 6000}s`}}
        onAnimationEnd={this.onAnimationEnd.bind(this)}
      >
        {this.props.children}
      </div>
    );
  }
}