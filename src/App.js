import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets'
import { selectUser, login, logout } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {auth} from "./firebase";
import {onAuthStateChanged} from 'firebase/auth';
// import { Widgets } from '@material-ui/icons';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth) =>{
      if(userAuth){
        //i.e. user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      }
      else
      {
        //i.e. user is logged out
        dispatch(logout());
      }
    })
  },[]);

  return (
    <div className="app">

      <Header/>
      {!user ? (<Login/>) : (
        <div className="app__body">
        <Sidebar avatar="https://media-exp1.licdn.com/dms/image/C5103AQGePkd0eFUlvg/profile-displayphoto-shrink_400_400/0/1567261642907?e=1665014400&v=beta&t=MRgml539RBvLtcM8nLx5ZYnUFkCKURs_KooEiaHu1-s" />
        <Feed />
        <Widgets />
        </div>
        
      )}

    </div>
  );
}

export default App;
