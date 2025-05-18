import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { Navigate } from "react-router-dom";

import {  useNavigate } from "react-router-dom";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogedin = useSelector((state) => state.auth.isLoggedIn);

 const logOut2=() =>{

  console.log(isLogedin+"   koko");
      dispatch(logout())
   // return  <Navigate to="/login" />;
    navigate("/login", { replace: true });
    window.location.reload();

  }

  return (
    <AppBar
      elevation={0}
      {...rest}
    >
      <Toolbar>
      <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
       
        <Box sx={{ flexGrow: 1 }} />
        <Hidden lgDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={logOut2}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
