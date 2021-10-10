import React from 'react';
import { Provider } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeView from './components/views/Home';
import Settings from './components/views/Settings';
import Login from './components/views/Login';
import Register from './components/views/Register';
import ChatView from './components/views/Chat';

import configureStore from './store';

export default function App() {

    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className='content-wrapper'>
                    <Switch>
                        <Route path='/settings'>
                            <Settings />
                            {/* <h1>I am settings view</h1> */}
                        </Route>
                        <Route path="/chat/:id">
                            <ChatView />
                        </Route>
                        <Route path='/login'>
                            <Login />
                            {/* <h1>I am login view</h1> */}
                        </Route>
                        <Route path='/register'>
                            <Register />
                            {/* <h1>I am register view</h1> */}
                        </Route>
                        <Route path='/'>
                            <HomeView />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}