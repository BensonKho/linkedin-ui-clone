import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import './Sidebar.css'

function Sidebar(props) {
    const user = useSelector(selectUser);

    const recentItem = (topic)=>(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
    );

    return (
        <div className="sidebar">
             <div className="sidebar__top">
                 <img src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sidebar_background"/>
                 <Avatar className="sidebar__avatar" src={user.photoURL}>
                     {/* incase no photo url is provided we can use the first letter of the name to display as photo*/user?.email[0]}
                 </Avatar>
                 <div className="sidebar__top__info">
                    <h3>{user.displayName}</h3>
                    <h4>{user.email}</h4>
                 </div>
             </div>
             <div className="sidebar__stats">
                 <div className="sidebar__stat">
                     <p>Who viewed you</p>
                     <p className="sidebar__statNumber">54</p>
                 </div>
                 <div className="sidebar__stat">
                     <p>Views on post</p>
                     <p className="sidebar__statNumber">102</p>
                 </div>
             </div>
             <div className="sidebar__bottom">
                 <p>Recent</p>
                 {recentItem("reactjs")}
                 {recentItem("Nodejs")}
                 {recentItem("Programmming")}
                 {recentItem("Web_Development")}
             </div>
        </div> 
    );
}

export default Sidebar
