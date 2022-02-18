import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/profile" component={Profile} exact />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
