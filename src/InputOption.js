import React from 'react'
import "./InputOption.css"
// import ImageIcon from '@material-ui/icons/Image'

export default function InputOption(props) {
    return (
        <div className="inputOption">
            <props.Icon style={{color: props.color}}/>
            <h4>{props.title}</h4>
        </div>
    )
}
