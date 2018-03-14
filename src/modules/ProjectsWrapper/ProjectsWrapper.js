import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsWrapper.scss';
import AnimatedBlock from '../AnimatedBlock/AnimatedBlock.js';
import ProjectItem from '../ProjectItem/ProjectItem.js';
import ProjectsWrapperArrow from '../ProjectsWrapperArrow/ProjectsWrapperArrow.js';
import FontAwesome from 'react-fontawesome';
import config from '../../../config.json'

const projectsURL = `${config.host}:${config.port}${config.api.projects}`;

export default class ProjectsWrapper extends React.Component {
  constructor(props) {
    super(props);

    // Меняется при нажатии стрелок вперед-назад
    this.firstProjectIndex = null;
    //this.maxProjectLists = null;
    this.projectsLength = null;
    // Меняется в зависимости от размера экрана
    this.projectsPerRow = 3;
    this.currentProjects = [];

    this.state = {
      projects: null,
      firstProjectIndex: 0
    }
  }

  componentWillMount() {
    fetch(projectsURL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
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
  }

  getCurrentProjects(resProjects) {
    this.projectsLength = resProjects.length;
    if (this.firstProjectIndex === null) {
      // Первый элемент задается последним проектом
      this.firstProjectIndex = this.projectsLength - 1;
    }
    console.log(this.firstProjectIndex);
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
    console.log(this.firstProjectIndex);
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
    console.log(this.firstProjectIndex);
    this.getCurrentProjects(this.state.projects);
    this.setState({
      firstProjectIndex: this.firstProjectIndex
    });
  }

  render() {
    const classMod = this.props.classMod === 'hidding-' ? 'hidding-' : 'appearing-';
    return this.state.projects === null ? null : (
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