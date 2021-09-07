import React from 'react';
import {
    Router,
    Route
} from "react-router-dom";
import Landing from './components/Landing';
import history from './history';
import Footer from './components/Footer/Footer';


export default function App() {
    return (
        <div>
            <Router history={history}>
                <Landing />
            </Router>
            <Footer />
        </div>

    )
}
