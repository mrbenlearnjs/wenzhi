import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import Cookie from 'js-cookie'
import Welcome from '../components/Welcome'
import Login from '../components/Login'

const Routes = ({ history ,replace}) =>
  <Router history={history}>
    <Route path="/" component={App} onEnter={(history,replace)=>{
      if(!Cookie.get('wenzhi')){
        replace('/login')
      }else {
        replace('/welcome')
      }
    }}/>

    <Route path="/login" component={Login} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/actived" component={App} />
    <Route path="/completed" component={App} />
    <Route path="*" component={NotFound}/>
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
