import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import { LoginScreen } from '../components/auth/LoginScreen';
  import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exac path ="/login" component = {LoginScreen} />
                    <Route exac path ="/" component = {CalendarScreen} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
