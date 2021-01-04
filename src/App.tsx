import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Profile from "./components/Profile/Profile";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

function App() {
    return (
        <div className="app-wrapper">
            <Route  />
            <HeaderContainer />
            <div className='wrapperContent'>
                <Navbar/>
                <Route path='/login' render={() => <Login />}/>
                <Route path='/profile/:userId?' render={() => <Profile />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/settings' render={() => <Settings />}/>
                <Route path='/news' render={() => <News />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
