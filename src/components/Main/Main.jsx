import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {CardList} from "../CardList/CardList";
import {useDispatch} from "react-redux";
import {fetchWords} from "../../store/actions/mainActions";
import RandomWordCard from "../RandomWordCard/RandomWordCard";

function Main() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchWords()), [])
    return (
        <Routes>
            <Route path={'/'} element={<CardList/>}/>
            <Route path={'/word'} element={<RandomWordCard/>}/>
        </Routes>
    );
}

export default Main;