import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioPage.scss';
import Aside from '../Aside/Aside.js';
import Galaxy from '../Galaxy/Galaxy.js';
import FrontPage from '../FrontPage/FrontPage.js';
import ContactsPage from '../ContactsPage/ContactsPage.js';
import MyWorksPage from '../MyWorksPage/MyWorksPage.js';

export default class Portfolio extends React.Component {
  /* Компонент контролирует переключение страниц и текущую страницу */

  constructor(props) {
    super(props);

    // Все страницы портфолио
    this.PAGES = ['about', 'contacts', 'my works'];
    // В стадии падения все спрятано. В стадии появления инициализируется
    // страница и задаются анимации появления. В стадии переключения
    // задаются анимации скрытия и после нее задается стадия появления.
    this.STAGES = ['falling', 'appearing', 'switching'];
    this.currentPage = 0;
    this.page = this.checkCurrentPage(this.STAGES[0]);
    this.asides = {
      left: null,
      right: null
    }
    this.state = {
      stage: this.STAGES[0]
    }
  }

  onAnimationEnd() {
    if (this.state.stage === this.STAGES[0]) {
      this.page = this.checkCurrentPage(this.STAGES[1]);
      this.setState({stage: this.STAGES[1]});
    }
  }

  // Function return name of previous page
  getPrevPage(currentPage) {
    let newPageIndex = currentPage || this.currentPage;
    if (this.PAGES.lenght < 3) throw new Error('too few pages');

    this.PAGES[newPageIndex] === this.PAGES[0] ?
      newPageIndex = this.PAGES.length - 1 :
      newPageIndex --;
    
    return newPageIndex;
  }

  // Function return name of next page
  getNextPage(currentPage) {
    let newPageIndex = currentPage || this.currentPage;
    if (this.PAGES.lenght < 3) throw new Error('too few pages');

    this.PAGES[newPageIndex] === this.PAGES[this.PAGES.length - 1] ?
      newPageIndex = 0 :
      newPageIndex ++;
    
    return newPageIndex;
  }

  checkCurrentPage(stage) {
    let classMod = '';
    if (stage === this.STAGES[1]) {
      classMod = 'appearing-';
    }
    else if (stage === this.STAGES[2]) {
      classMod = 'hidding-';
    }
    if (stage !== this.STAGES[0]) {
      switch(this.currentPage) {
        case 0:
          return <FrontPage classMod={classMod} />
        case 1:
          return <ContactsPage classMod={classMod} />
        case 2:
          return <MyWorksPage classMod={classMod} />
        default:
          throw new Error('Wrong Page!');
      }
    }
    return null;
  }

  onAsidesClick() {
    this.page = this.checkCurrentPage(this.STAGES[2]);
    this.setState({
      stage: this.STAGES[2]
    });
  }

  onAsidesClickAnimEnd(dir) {
    if (this.state.stage === this.STAGES[2]) {
      this.currentPage = dir === 'next' ? this.getNextPage() : this.getPrevPage();
      this.page = this.checkCurrentPage(this.STAGES[1]);
      this.setState({
        stage: this.STAGES[1]
      });
    }
  }

  setAsides() {
    // Нужно перерендерить страницу в конце первой анимации асайдов, для применения рефов
    if (this.state.stage !== this.STAGES[0]) {
      return (
        <div>
          <Aside 
            stage={this.state.stage}
            word={this.PAGES[this.getPrevPage()]} 
            side='left' 
            ref={el => this.asides.left = el}
            otherAside={this.asides.right}
            onClick={this.onAsidesClick.bind(this)} 
            onClickAnimEnd={() => this.onAsidesClickAnimEnd('prev')}
          />
          <Aside 
            stage={this.state.stage}
            word={this.PAGES[this.getNextPage()]} 
            side='right' 
            ref={el => this.asides.right = el}
            otherAside={this.asides.left}
            onClick={this.onAsidesClick.bind(this)} 
            onClickAnimEnd={() => this.onAsidesClickAnimEnd('next')}
          />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <section 
        className="portfolio-page-block falling" 
        onAnimationEnd={this.onAnimationEnd.bind(this)}
      >
        <Galaxy />
        {this.setAsides()}
        {this.page}
      </section>
    );
  }
}