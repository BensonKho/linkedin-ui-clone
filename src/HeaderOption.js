import React from 'react'
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core"
import {useSelector} from "react-redux"
import { selectUser } from './features/userSlice';


function HeaderOption(props) {
    const user = useSelector(selectUser);
    return (
        <div onClick={props.onClick} className="headerOption">
            {props.Icon && <props.Icon className='headerOption__icon'/>}
            {props.avatar && (<Avatar className="headerOption__icon">{user?.email[0]}</Avatar>)}
            <h4 className="headerOption__title">{props.title}</h4>
        </div>
    )
}

export default HeaderOption
 