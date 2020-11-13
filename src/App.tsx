import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {addMessage, StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='wrapperContent'>
                <Navbar/>
                <Route path='/profile' render={() => <
                    Profile posts={props.state.posts}
                            addPost={props.addPost}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogs={props.state.dialogs}
                    messages={props.state.messages}
                    addMessage={props.addMessage}
                />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
