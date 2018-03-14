import React from 'react';
import PropTypes from 'prop-types';
import './Aside.scss';

export default class Aside extends React.Component {
  /* Компонент боковой панели, отвечает за её представление и заимодействие */

  constructor(props) {
    super(props);
    if (props.side !== 'left' && props.side !== 'right') throw new Error('Wrong Aside "side" prop');
    this.stage = this.props.stage;
    this.classMod = this.setClassMod();
    this.side = this.props.side;
    this.animationInProgress = true;
    this.clicked = false;
    this.otherClicked = false;
  }

  static get propTypes() {
    return {
      word: PropTypes.string,
      side: PropTypes.string,
      startAnimation: PropTypes.bool,
      onClick: PropTypes.func,
      otherAside: PropTypes.any,
      onClickAnimEnd: PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      word: 'default',
      side: 'left',
      startAnimation: false,
      onClick: undefined,
      otherAside: undefined,
      onClickAnimEnd: undefined
    }
  }

  setClassMod() {
    switch(this.props.stage) {
      case 'appearing':
        return 'appears-aside';
      case 'switching':
        if (this.clicked)
          return 'slide-aside';
        else
          return 'hide-aside';
    }
  }

  wrapWord(word) {
    const wrapped = Array.from(word).map((letter, index) => {
      return letter === ' ' ? 
        <div className="push-page-space" key={index}></div> : 
        <div className="push-page-letter" key={index}>{letter}</div> ;
    });
    return wrapped;
  }

  onAnimationStart(e) {
    this.animationInProgress = true;
  }

  onAnimationEnd(e) {
    if (this.props.stage === 'switching') {
      this.clicked && this.props.onClickAnimEnd();
      this.wrappedWord = this.wrapWord(this.props.word);
      this.clicked = false;
    }

    this.classMod = this.setClassMod();
    this.animationInProgress = false;
  }

  onClick(e) {
    if (!this.animationInProgress) {
      this.props.onClick(this.side);
      this.clicked = true;
    }
  }

  render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    this.classMod = this.setClassMod();                                                                                                                                                                                              
    return (
      <aside 
        className={this.props.side + '-push-page ' + this.classMod}
        onClick={this.onClick.bind(this)}
        onAnimationEnd={this.onAnimationEnd.bind(this)}
        onAnimationStart={this.onAnimationStart.bind(this)}
      >
        <div className="push-page-word">
          {this.wrapWord(this.props.word)}
        </div>
      </aside>
    );
  }
}