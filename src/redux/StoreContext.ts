import React from "react"
import store from "./redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "../App";


const StoreContext = React.createContext(store)


export default StoreContext