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
import Welcome from './components/views/Welcome';
//import Register from './components/views/Register';
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
                        <Route path='/' exact>
                            <Welcome />
                        </Route>
                        <Route path='/settings'>
                            <Settings />
                        </Route>
                        <Route path="/chat/:id">
                            <ChatView />
                        </Route>                        
{/*                         <Route path='/register'>
                            <Register />
                        </Route> */}
                        <Route path='/home'>
                            <HomeView />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}