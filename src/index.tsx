import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





const dialogData = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Andrey"},
    {id: 4, name: "Victor"},
    {id: 5, name: "Georgy"}
]

const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "I learn React!"},
    {id: 4, message: "I am too"},
    {id: 5, message: "It's greate!"},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogsElements={dialogData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
