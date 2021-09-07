import React from 'react';
import {
    Router,
    Route
} from "react-router-dom";
import Landing from './components/Landing';
import history from './history';


export default function App() {
    return (
        <Router history={history}>
            <Landing/>
        </Router>
    )
}
