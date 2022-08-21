import React, {useState} from 'react'
import "./Login.css"
import linkedInLogo from "./linkedIn-logo.png"
import {login} from "./features/userSlice"
import {auth} from "./firebase"
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth'
import {useDispatch} from 'react-redux'


function Login() {
    // making states for the form input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic]= useState("");
    const dispatch = useDispatch();

    //for sign up
    const register = () =>{
        if(!name){
            return alert("Please enter a name");
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user,{
                displayName: name, 
                photoURL: profilePic,
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                },[]))
            })
        }).catch((error) => alert(error.message));
    };

    //for login/sign-in
    const loginToApp = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            dispatch(login({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }))
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src={linkedInLogo} alt="linkedInLogo" />
            <form>
                <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full Name(required if registering)' type="text" />
                <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} placeholder='Profile pic URL(optional)' type="text" />
                <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' type="email" />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password(6 or more characters)' type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>New to LinkedIn?{" "}
                <span className="login__register" onClick={register}>Join Now</span>
            </p>

        </div>
    )
}

export default Login
