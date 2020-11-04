import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='wrapperContent'>
          <Navbar />
          <Content />
      </div>
    </div>
  );
}

export default App;
