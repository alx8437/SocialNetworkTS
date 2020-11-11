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

const posts =
    [
        {id: 1, message: "Hello, i like this course", likesCount: 15},
        {id: 2, message: "It's a nice course, yes!", likesCount: 20},
        {id: 3, message: "Hi!", likesCount: 2},
    ]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogData} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
