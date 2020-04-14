import React, { Component, Fragment } from 'react';
import './App.scss';
import './resetStyle.scss';
import './pageTransitions.scss';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Contact from './components/Contact/Contact';
import HomeNav from './components/HomeNav/HomeNav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import './Animations/AnimationsKey.scss';
import './Scss/inheritence.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevDepth: this.getPathDepth(this.props.location),
    };
  }

  componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location) })
  }

  getPathDepth(location) {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    return pathArr.length;

  }

  render() {
    const { location } = this.props;

    const timeout = {
      enter: 1000,
      exit: 500,
    }

    const currentKey = location.pathname.split('/')[1];

    return (
      <Fragment>
        <TransitionGroup component='div' className='App'>
          <CSSTransition key={currentKey} timeout={timeout} classNames='pageSlider' mountOnEnter={false} unmountOnExit={true}>
            <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? 'down' : 'up'}>
              <Switch location={location}>
                <Route exact path="/" component={HomeNav} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    )

  }
}



export default withRouter(App);
