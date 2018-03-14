import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

const LoaderLetter = (props) => {
  return (
    <span>
      {props.letter}
    </span>
  );
}

LoaderLetter.propTypes = {
  letter: PropTypes.string.isRequired
}

export default class Loader extends React.Component {

  constructor(props) {
    super(props);

    const { text } = props;

    this.letters = Array.from(text).map((letter, index) => (
      <LoaderLetter key={index} letter={letter}/>
    ));
  }

  static get propTypes() {
    return {
      text: PropTypes.string.isRequired
    }
  }

  static get defaultProps() {
    return {
      text: 'loading'
    }
  }

  render() {
    return (
      <div className={`loader ${this.props.hide ? 'hide-loader' : ''}`}>
        {this.letters}
      </div>
    );
  }
}