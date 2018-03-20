import React from 'react';
import PropTypes from 'prop-types';
import './Galaxy.scss';

export default class Galaxy extends React.Component {
  /* Компонент представляет фон с вращающейся галактикой. 
     Абсолютно спозиционирован, поэтому его родитель не должен быть статик */

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="galaxy-wrapper">
        <div className="galaxy-image">
        </div>
        <div className="galaxy-gradient">
        </div>
      </div>
    );
  }
}