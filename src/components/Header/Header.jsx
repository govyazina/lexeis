import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import {LoginModal} from "../LoginModal/LoginModal";
import {useRFromLocalStorage} from "../../hooks/useRFromLocalStorage";

export default function Header() {
  const {token, name} = useRFromLocalStorage()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Λέχεις
          </Typography>
          <Button component={NavLink} to={'/'} color="inherit">Home</Button>
          <Button component={NavLink} to={'/word'} color="inherit">Let's learn</Button>
          {token ? name : <LoginModal/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}