import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import HeaderOption from "./HeaderOption"
import {useDispatch, useSelector} from "react-redux"
import {logout, selectUser} from "./features/userSlice"
import {auth} from "./firebase"

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () =>
    {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn_logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                 <HeaderOption Icon={HomeIcon} title="Home"/>
                 <HeaderOption Icon={SupervisorAccountIcon } title="My Networks"/>
                 <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                 <HeaderOption Icon={ChatIcon} title="Messaging"/>
                 <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                 <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
