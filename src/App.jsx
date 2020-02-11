import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Header, About, Courses, PageNotFound } from './components';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
