import React, { Children } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../components/main_components/index'
import UserPage from "./UserPage"

const AppRoutes = ({match}) => { 
  return (<Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/user_page/:uid" component={UserPage}/>
  </Switch>)
}

export default AppRoutes