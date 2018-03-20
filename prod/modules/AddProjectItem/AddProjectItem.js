import React from 'react';
import PropTypes from 'prop-types';
import './AddProjectItem.scss';
import config from '../../../config.json';

export default class AddProjectItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exist: true
    }
    console.log(props);
  }

  static get propTypes() {
    return {
      name: PropTypes.string,
      image: PropTypes.string,
      github: PropTypes.string,
      deleteUrl: PropTypes.string,
      demo: PropTypes.string,
      description: PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      name: 'default',
      image: 'default',
      github: 'default',
      demo: 'default',
      deleteUrl: '',
      description: 'default'
    }
  }

  onDelete() {
    console.log('delete');
    fetch(this.props.deleteUrl + '/?name=' + this.props.name, {
      method: 'DELETE'
    })
      .then((res) => {return res.json()})
      .then(res => {
        this.setState({
          exist: false
        });
      })
      .catch(console.log);
  }

  render() {
    if (!this.state.exist) return null;
    return (
      <div className='add-project-item'>
        <h2>
          {this.props.name}
        </h2>
        <img src={`${config.api.static}images/${this.props.image}`} style={{maxWidth: '100%'}} />
        <a href={this.props.github}>
          {this.props.github}
        </a>
        <a href={this.props.demo}>
          {this.props.demo}
        </a>
        <p>
          {this.props.description}
        </p>
        <input placeholder="password" />
        <button onClick={this.onDelete.bind(this)}>
          delete
        </button>
      </div>
    );
  }
}