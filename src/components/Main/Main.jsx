import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {CardList} from "../CardList/CardList";
import {useDispatch, useSelector} from "react-redux";
import {fetchWords, getList, getLists} from "../../store/actions/mainActions";
import RandomWordCard from "../RandomWordCard/RandomWordCard";
import UserLists from "../UserLists/UserLists";

function Main() {
    const {token} = useSelector(store => store.mainStore.user)
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchWords()), [])
    useEffect(() => token && dispatch(getLists(token)), [token])
    return (
        <Routes>
            <Route path={'/'} element={token ? <UserLists/> : <CardList/>}/>
            <Route path={'/word'} element={<RandomWordCard/>}/>
            <Route path={'/lists'} element={<UserLists/>}/>
            <Route path={'/list/:id'} element={<CardList/>}/>
        </Routes>
    );
}

export default Main;