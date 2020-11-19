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
import {StoreType} from "./redux/store";


type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='wrapperContent'>
                <Navbar/>
                <Route path='/profile' render={() => <
                    Profile profilePage={props.store.state.profilePage}
                            addPost={props.store.addPost.bind(props.store)}
                            updateTextPost={props.store.updateTextPost.bind(props.store)}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.store.state.dialogsPage}
                    addMessage={props.store.addMessage.bind(props.store)}
                    updateMessageText={props.store.updateMessageText.bind(props.store)}
                />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
