import React from 'react';
import Stopwatch from './component/stopwatch';
import './App.css';
import Header from './component/header';

function App() {
    return (
        <div className="App">
            <Stopwatch />
            <Header />
        </div>
    );
}

export default App;
