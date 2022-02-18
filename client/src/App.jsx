import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/dashboard" component={Dashboard} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/login" component={Login} exact />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
