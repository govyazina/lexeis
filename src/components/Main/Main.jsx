import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {CardList} from "../CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords, getLists} from "../../store/actions/mainActions";
import RandomWordCard from "../RandomWordCard/RandomWordCard";

function Main() {
    const {token} = useSelector(store => store.mainStore.user)
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchWords()), [])
    useEffect(() => token && dispatch(getLists(token)), [token])
    return (
        <Routes>
            <Route path={'/'} element={<CardList/>}/>
            <Route path={'/word'} element={<RandomWordCard/>}/>
        </Routes>
    );
}

export default Main;