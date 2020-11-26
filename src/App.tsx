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
import {DialogsPage, ProfilePage} from "./redux/store";
import {CombinedState, Store} from "redux";
import {ActionTypes} from "./redux/actionTypes";
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePage; dialogsPage: DialogsPage; }>, ActionTypes>
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className='wrapperContent'>
                <Navbar/>
                <Route path='/profile' render={() => <
                    Profile profilePage={props.store.getState().profilePage}
                            dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path='/dialogs' render={() => <DialogsContainer
                    dialogsPage={props.store.getState().dialogsPage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news' render={() => <News/>}/>
            </div>
        </div>
    );
}

export default App;
