import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/nav';
import Auth from './components/auth';
import CreateDoc from './pageType/CreateDoc';

/* eslint-disable no-use-before-define */
function App() {
    return (
        <div>
            <Auth />

            <Router>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/crear-documento" component={CreateDoc} />
            </Router>
        </div>
    );
}

// TODO move this to it's own component and actually put something in here
function Home() {
    return <h2>Home</h2>;
}

// TODO move this to it's own component and actually put something in here
function About() {
    return <h2>About</h2>;
}

export default App;
