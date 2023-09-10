import {Divider, List, ListItem, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getList} from "../../store/actions/mainActions";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {ListItemSecondaryAction} from '@mui/material';


export const CardList = () => {
    const {words, user} = useSelector(store => store.mainStore);
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (id && user.token) {
            dispatch(getList(user.token, id))
        }
    }, [id, user.token])
    return (
        <List sx={{width: '100%', maxWidth: 360}}>
            {words.map((word, index) => {
                return (
                    <>
                        <ListItem
                            key={word.id}
                        >
                            <ListItemText
                                primary={`${word.front}`}
                                secondary={word.back}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge="end" aria-label="edit">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        {
                            (index < words.length - 1) && <Divider/>
                        }
                    </>
                );
            })}
        </List>
    );
}