import {Route, Routes} from "react-router-dom";
import {CardList} from "./components/CardList/CardList";
import {Provider} from 'react-redux';
import React from 'react';
import store from './store/store';


function App() {

    return (
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<CardList/>}/>
            </Routes>
        </Provider>
    );
}

export default App;
