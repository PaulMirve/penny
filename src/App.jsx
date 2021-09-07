import React from 'react';
import {
    Router,
    Route,
    Switch
} from "react-router-dom";
import Landing from './components/Landing';
import history from './history';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404';


export default function App() {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route component={Error404} />
                </Switch>
            </Router>
            <Footer />
        </div>

    )
}
