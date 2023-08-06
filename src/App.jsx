import {Provider} from 'react-redux';
import React from 'react';
import store from './store/store';
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";


function App() {

    return (
        <Provider store={store}>
            <Header/>
            <Main/>
        </Provider>
    );
}

export default App;
