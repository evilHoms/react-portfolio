import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsWrapper.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';
import ProjectItem from '../ProjectItem/ProjectItem.js';
import ProjectsWrapperArrow from '../ProjectsWrapperArrow/ProjectsWrapperArrow.js';
import ProjectsLoader from '../ProjectsLoader/ProjectsLoader.js';
import FontAwesome from 'react-fontawesome';
import config from '../../../config.json';


const projectsURL = 
  config.production ? 
  `${config.ip}${config.api.projects}`:
  `${config.host}:${config.port}${config.api.projects}`;

export default class ProjectsWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.projectsLoaded = false;
    this.firstProjectIndex = null;
    this.projectsLength = null;
    this.currentProjects = [];
    this.state = {
      projects: null,
      firstProjectIndex: 0,
      windowWidth: window.innerWidth
    }
  }

  componentWillMount() {
    setTimeout(() => {
    fetch(projectsURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.projectsLoaded = true;
        const resProjects = res.map(el => (
          <ProjectItem 
            projectName={el.name} 
            githubHref={el.github}
            imageSrc={el.image}
            projectDemo={el.demo}
            description={el.description}
            key={el._id} 
          />
        ));
        this.getCurrentProjects(resProjects);
      })
      .catch(console.log);
    }, 5000);
  }

  getCurrentProjects(resProjects) {
    this.projectsLength = resProjects.length;
    if (this.firstProjectIndex === null) {
      // Первый элемент задается последним проектом
      this.firstProjectIndex = this.projectsLength - 1;
    }
    this.currentProjects = [];
    // Показывает проекты от новых к старым
    for (let i = this.firstProjectIndex; i > this.firstProjectIndex - this.projectsPerRow; i--) {
      if (i < 0) {
        this.currentProjects.push(resProjects[i + this.projectsLength]);
      }
      else {
        this.currentProjects.push(resProjects[i]);
      }
    }
    this.setState({
      projects: resProjects
    });
  }

  onNextArrowClick() {
    if (this.firstProjectIndex === 0) {
      this.firstProjectIndex = this.projectsLength - 1;
    }
    else {
      this.firstProjectIndex --;
    }
    this.getCurrentProjects(this.state.projects);
    this.setState({
      firstProjectIndex: this.firstProjectIndex
    });
  }

  onPrevArrowClick() {
    if (this.firstProjectIndex  === this.projectsLength - 1) {
      this.firstProjectIndex = 0;
    }
    else {
      this.firstProjectIndex ++;
    }
    this.getCurrentProjects(this.state.projects);
    this.setState({
      firstProjectIndex: this.firstProjectIndex
    });
  }

  setNumberOfProjects() {
    if (window.innerWidth > 1700) {
      this.projectsPerRow = 5;
    }
    else if (window.innerWidth > 900) {
      this.projectsPerRow = 3;
    }
    else if (window.innerWidth > 700) {
      this.projectsPerRow = 2;
    }
    else {
      this.projectsPerRow = 1;
    }
    if (this.state.projects !== null)
      this.getCurrentProjects(this.state.projects);
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    this.setNumberOfProjects();
    window.addEventListener('resize', this.setNumberOfProjects.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setNumberOfProjects.bind(this));
  }

  render() {
    const classMod = this.props.classMod === 'hidding-' ? 'hidding-' : 'appearing-';
    return this.state.projects === null ? (<ProjectsLoader />) : (
      <AnimatedBlock name='projects-wrapper' dirrection='place' classMod={classMod}>

        <ProjectsWrapperArrow 
          side='left' 
          onClick={this.onPrevArrowClick.bind(this)} 
        >
          <FontAwesome name='chevron-left' />
        </ProjectsWrapperArrow>
        <div className='projects-wrapper-list'>
          {this.currentProjects}
        </div>
        <ProjectsWrapperArrow 
          side='right' 
          onClick={this.onNextArrowClick.bind(this)} 
        >
          <FontAwesome name='chevron-right' />
        </ProjectsWrapperArrow>
      </AnimatedBlock>
    );
  }
} 