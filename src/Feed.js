import firebase from 'firebase/compat/app';
import React , {useEffect, useState} from 'react'
import "./Feed.css"
import InputOption from "./InputOption"
import CreateIcon from '@material-ui/icons/Create'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import ImageIcon from '@material-ui/icons/Image'
import Post from './Post'
import { query, collection, doc, setDoc, onSnapshot, addDoc, serverTimestamp, orderBy} from "firebase/firestore"; 
import { db } from './firebase'
import {useSelector} from 'react-redux'
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState(""); 

    useEffect(()=>{
        const q = query(collection(db, "posts"), orderBy("timeStamp","desc")); 
        // store and pass query in const q to the snapshot method or use directly
        onSnapshot(q, (snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
        ));
    },[]);


    const sendPost = event =>{
        event.preventDefault();

        try{
            const docRef = addDoc(collection(db, "posts"),{
                name: user.displayName,
                description: user.email,
                message: input,
                photoURL: user.photoURL || "",
                timeStamp: serverTimestamp()
            });
            console.log("Document written with ID: " + docRef);
        }
        catch(e)
        {
            console.error("Error adding the document: " + e);
        }
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value = {input} onChange = {e => setInput(e.target.value)} type="text" />
                        <button type="submit" onClick = {sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7085F9"/>
                    <InputOption Icon={SubscriptionIcon} title="Video" color="E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts */}
            {/* {id, data : {name, description, message, photoUrl}} */}
            <FlipMove>
            {posts.map((post) => (
                <Post
                key = {post.id}
                name = {post.data.name}
                description = {post.data.description}
                message = {post.data.message}
                photoURL = {post.data.photoURL}/>
            )
            )}
            </FlipMove>
        </div>
    )
}

export default Feed
