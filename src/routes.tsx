import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import LoginContainer from './components/login/login-container';



const AppRouter = () => {
    return (
        <Switch>
            <Route path="/" component={LoginContainer}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
    )
}

export default AppRouter;