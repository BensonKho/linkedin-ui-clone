import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import "./Post.css"

const Post = forwardRef((props, ref) => {

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={props.photoURL}>{props.name[0]}</Avatar>
                <div className="post__info">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{props.message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon = {ThumbUpAltOutlined} title='Like' color = 'gray'></InputOption>
                <InputOption Icon = {ChatOutlined} title = 'Chat' color = 'gray'></InputOption>
                <InputOption Icon = {ShareOutlined} title = 'Share' color = 'gray'></InputOption>
                <InputOption Icon = {SendOutlined} title = 'Send' color = 'gray'></InputOption>
            </div>
        </div>
    )
});

export default Post
