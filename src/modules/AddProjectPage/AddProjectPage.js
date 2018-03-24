import React from 'react';
import PropTypes from 'prop-types';
import './AddProjectPage.scss';
import config from '../../../config.json';
import AddProjectItem from '../AddProjectItem/AddProjectItem.js';

const url = `${config.host}:${config.port}${config.api.projects}`;

export default class AddProject extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      name: null,
      image: null,
      github: null,
      pass: null,
      demo: null,
      description: null
    }

    this.state = {
      items: null
    }
  }

  componentDidMount() {
    console.log('mounted');
    this.getProjects(this);
  }

  getProjects(self) {
    fetch(url)
      .then((res) => {return res.json()})
      .then((res) => {
        self.setState({
          items: res.map((el, index) => {
            return (
              <AddProjectItem 
                name={el.name} 
                image={el.image} 
                github={el.github} 
                demo={el.demo}
                key={index} 
                description={el.description}
                deleteUrl={url}
              />
            );
          })
        });
      })
      .catch(console.log);
  }

  onSend(e) {
    e.preventDefault();
    const body = {
      name: this.data.name.value,
      image: this.data.image.value,
      github: this.data.github.value,
      pass: this.data.pass.value,
      demo: this.data.demo.value,
      description: this.data.description.value
    }
    const jsonBody = JSON.stringify(body);
    console.log(this.data.description.value);

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonBody
    })
      .then((res) => {
        res.status === 403 && document.write('ACCESS DENIED!!!');
        return res.json()
      })
      .then((res) => this.getProjects(this))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      .catch(console.log);
  }

  render() {
    return (
      <section className='add-project-page'>
        <h1>
          Adding new project
        </h1>
        <form className='add-project-form'>
          <input ref={el => this.data.name = el} type="text" placeholder="Project name" />
          <input ref={el => this.data.image = el} type="text" placeholder="Image src in public/images dirrectory" />
          <input ref={el => this.data.github = el} type="text" placeholder="Github href" />
          <input ref={el => this.data.demo = el} type="text" placeholder="Demo href" />
          <textarea ref={el => this.data.description = el} placeholder="Project description" />
          <input ref={el => this.data.pass = el} type="text" placeholder="Enter passord" />
          <button onClick={this.onSend.bind(this)}>
            add
          </button>
        </form>
        <h2>
          Your projects
        </h2>
        {this.state.items || null}
      </section>
    );
  }
}