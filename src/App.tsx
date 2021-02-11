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
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "./redux/store";
import {setInitialised} from "./redux/app/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


type MapDispatchPropsType = {
    setInitialised: () => void,
}

type MapStatePropsType = {
    initialized: boolean
}

class App extends React.Component<MapDispatchPropsType & MapStatePropsType> {


    componentDidMount(): void {
        this.props.setInitialised()
    }

    render() {

        if (!this.props.initialized) return <Preloader />

        return (
            <div className="app-wrapper">
                <Route/>
                <HeaderContainer />
                <div className='wrapperContent'>
                    <Navbar/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile/:userId?' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    //if we not use MapStateToPropsType => write instead of this void
    //connect<void, MapDispatchPropsType, {}, RootStateType>
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>
    (mapStateToProps, {setInitialised})(App)
)
