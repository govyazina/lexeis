import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

function UserLists() {
    const {lists} = useSelector(store => store.mainStore)
    return (
        <Box sx={{width: '100%', maxWidth: 360,}}>
            <List>
                {
                    lists.map(list => (
                        <ListItem key={list.id} disablePadding>
                            <ListItemButton component={NavLink} to={`/list/${list.id}`}>
                                <ListItemText primary={list.name}/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default UserLists;