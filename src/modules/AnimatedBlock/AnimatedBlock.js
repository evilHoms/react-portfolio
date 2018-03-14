import React from 'react';
import PropTypes from 'prop-types';
import './AnimatedBlock.scss';

export default class AnimatedBlock extends React.Component {
  /* Компонент для анимарованного появления и скрытия контента */

  constructor(props) {
    super(props);
    this.STAGES = ['hidden', 'appearing', 'visible', 'hidding'];
    this.CLASS_MODS = ['hidden-element', 'appearing-', 'hidding-'];
    this.ANIM_DIRRECTIONS = ['top', 'left', 'right'];
  }

  static get propTypes() {
    return {
      classMod: PropTypes.string,
      dirrection: PropTypes.oneOf([null, 'top', 'left', 'right', 'place']),
      name: PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      classMod: 'hidden-element',
      dirrection: null,
      name: ''
    }
  }

  render() {
    const mod = this.props.classMod === this.CLASS_MODS[0] ? 
                this.CLASS_MODS[0] :
                this.props.classMod + this.props.dirrection ;
    const finalClassMod = this.props.name + ' ' + mod;

    return (
      <div className={finalClassMod}>
        {this.props.children}
      </div>
    );
  }
}
