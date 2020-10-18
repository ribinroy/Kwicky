import React, { useState } from 'react';
import './App.css';
import { Provider } from './store/Context';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
    const [isMaxWidth, setIsMaxWidth] = useState(true);
    return (
        <Provider>
            <Header setIsMaxWidth={setIsMaxWidth}></Header>
            <MainContent isMaxWidth={isMaxWidth}></MainContent>
        </Provider>
    );
}

export default App;
