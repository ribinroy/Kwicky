import React from 'react';
import './App.css';
import { Provider } from './store/Context';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
    return (
        <Provider>
            <Header></Header>
            <MainContent></MainContent>
        </Provider>
    );
}

export default App;
