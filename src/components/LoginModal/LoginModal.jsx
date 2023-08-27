import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../store/actions/mainActions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const LoginModal = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const {loginError} = useSelector(store => store.mainStore.errors)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const login = formData.get('login');
        const password = formData.get('password');
        dispatch(signIn(login, password))
    }

    return (
        <div>
            <Button onClick={handleOpen} color="inherit">Sign in</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={submit}>
                        <TextField id="login" name='login' label="Login" variant="standard"/>
                        <br/>
                        <TextField id="pass" label="Password" name={'password'} variant="standard" type='password'/>
                        <br/>
                        {loginError && <p>user not found</p>}
                        <Button variant="contained" type={'submit'}>Sign in</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

