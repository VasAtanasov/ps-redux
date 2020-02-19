import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Header,
    About,
    Courses,
    PageNotFound,
    ManageCoursePage
} from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                <Route component={PageNotFound} />
            </Switch>
            <ToastContainer autoClose={3000} />
        </div>
    );
};

export default App;
