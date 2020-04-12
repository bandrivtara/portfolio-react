import React, { Fragment, useContext, useEffect } from 'react';
import './App.scss';
import './resetStyle.scss'
import HomeNav from './components/HomeNav/HomeNav';
import About from './components/About/About';
import { BrowserRouter, Switch, Route, Link, useLocation, Redirect, __RouterContext, withRouter } from 'react-router-dom'
import { useTransition, animated, useSpring } from 'react-spring'

function useRouter() {
  return useContext(__RouterContext)
}

function App() {
  const { location } = useRouter()

  console.log(location)

  let getPathDepth = (location) => {
    let pathArr = location.pathname.split('/');
    pathArr = pathArr.filter(n => n !== '');
    debugger
    return pathArr.length;
  }

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      transform: `translate3d(0, 50%, 0)`,
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: {
      opacity: 0,
      transform: `translate3d(0, -50%, 0)`
    },
    config: { duration: 800 },
  })

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route path="/" exact component={HomeNav} render={() => (console.log('render'))}>
        </Route>
        <Route exact path="/about" component={About} />
      </Switch>
    </animated.div>
  ))

}
export default withRouter(App);
