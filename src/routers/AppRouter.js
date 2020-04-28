//install -> imoprt -> use
// import validator from 'validator';

import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//pages
import DashboardPage from '../components/DashboardPage';
import ProjectDashboardPage from '../components/ProjectDashboardPage';
import AddBikePage from '../components/AddBikePage';
import AdminPage from '../components/AdminPage';
import SettingsPage from '../components/SettingsPage';
import AddProjectPage from '../components/AddProjectPage';
import EditBikePage from '../components/EditBikePage';
import EditProjectPage from '../components/EditProjectPage';
import VideosPage from '../components/VideosPage';
import NotFound from '../components/NotFound';
//components
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 export const history = createHistory();


 const AppRouter = () => (
    <Router history={history}>
    <div>
   
    <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true}/>
        <PrivateRoute path='/dashboard' component={DashboardPage}/>
        <PrivateRoute path='/projectDashboard/:id' component={ProjectDashboardPage}/>
        <PrivateRoute path='/create' component={AddBikePage}/>
        <PrivateRoute path='/createProject/:bikeId' component={AddProjectPage}/>
        <PrivateRoute path='/edit/:id' component={EditBikePage}/>
        <PrivateRoute path='/editProject/:id' component={EditProjectPage}/>
        <PrivateRoute path='/videos' component={VideosPage}/>
        <PrivateRoute path='/admin' component={AdminPage}/> 
        <PrivateRoute path='/settings' component={SettingsPage}/>
        <Route component={NotFound}/>
    </Switch>
    </div>
</Router>
 )

export default AppRouter;