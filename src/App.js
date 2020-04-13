import React, { Component } from 'react';
import './App.scss';
import './resetStyle.scss'
import './pageTransitions.scss'
import HomeNav from './components/HomeNav/HomeNav';
import About from './components/About/About';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Projects from './components/Projects/Projects';
import './AnimationsKey/AnimationsKey.scss'


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
      <TransitionGroup component='div' className='App'>
        <CSSTransition key={currentKey} timeout={timeout} classNames='pageSlider' mountOnEnter={false} unmountOnExit={true}>
          <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? 'down' : 'up'}>
            <Switch location={location}>
              <Route exact path="/" component={HomeNav} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )

  }
}



export default withRouter(App);
