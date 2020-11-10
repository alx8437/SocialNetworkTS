import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";

type AppPropsType = {
    dialogsElements: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

function App(props: AppPropsType) {
  return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className='wrapperContent'>
                    <Navbar />
                    <Route path='/profile' render={ () => <Profile />}/>
                    <Route path='/dialogs' render={ () => <Dialogs
                        dialogsElements={props.dialogsElements}
                        messages={props.messages}
                    />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                    <Route path='/news' render={ () => <News />}/>
                </div>
            </div>
        </BrowserRouter>
  );
}

export default App;
