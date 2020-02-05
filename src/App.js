import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";

class App extends Component {
  render() {
    return(
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar/>
            {/*<div id="colorlib-main">*/}
            {/*  <Introduction></Introduction>*/}
            {/*  <About></About>*/}
            {/*  <Timeline></Timeline>*/}
            {/*</div>*/}
          </div>
        </div>
    );
  }
}

export default App;
