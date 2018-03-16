import React from 'react';
import PropTypes from 'prop-types';
import AutoSliderItem from'../AutoSliderItem/AutoSliderItem.js';

export default class AutoSlider extends React.Component {
  constructor(props) {
    super(props);
    this.currentItemIndex = 0;
    this.mount = true;
    this.items = this.props.items.map(item => 
      <AutoSliderItem period={this.props.period}>
        {item}
      </AutoSliderItem>
    );
    this.state = {
      currentItem: this.items[this.currentItemIndex]
    }
  }

  static get propTypes() {
    return {
      items: PropTypes.array,
      period: PropTypes.number,
      style: PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      items: [],
      period: 1000,
      style: {}
    };
  }

  nextItem(items) {
    const length = items.length;
    const lastItemIndex = length - 1;
    if (this.currentItemIndex < lastItemIndex) {
      this.currentItemIndex ++;
    }
    else {
      this.currentItemIndex = 0;
    }
    this.setState({
      currentItem: this.items[this.currentItemIndex]
    });
  }

  setNewState() {
    const { items, period } = this.props;

    setTimeout(() => {
      if (this.mount)
        this.nextItem(this.items);
    }, this.props.period);
  }

  componentDidMount() {
    this.setNewState();
  }

  componentDidUpdate() {
    this.mount = true;
    this.setNewState();
  }

  componentWillUnmount() {
    this.mount = false;
  }

  render() {
    return (
      <div className='auto-slider' style={this.props.style}>
        {this.state.currentItem}
      </div>
    );
  }
}