import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

export default function Home(){
    return (
    <div className="App">
        <header className="App-header">
                <Link to="/doc-creator">App</Link>
        </header>
    </div>);
};