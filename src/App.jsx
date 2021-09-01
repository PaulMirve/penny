import React from 'react';
import {
    Router,
    Route
} from "react-router-dom";
import history from './history';


export default function App() {
    return (
        <Router history={history}>
            <h1>Hello World!</h1>
        </Router>
    )
}
