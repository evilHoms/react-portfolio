import React from 'react';
import PropTypes from 'prop-types';
import './NotFoundPage.scss';

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='not-found-page'>
        <h1>404</h1>
        <p>It is not the page you are looking for.</p>
      </div>
    );
  }
}