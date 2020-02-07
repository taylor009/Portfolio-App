import React, { Component } from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";

class App extends Component {
  render() {
    return(
        <div id="colorlib-page">
          <div id="container-wrap">
            <Sidebar/>
            <div id="colorlib-main">
              <Introduction/>
              <About/>
            {/*  <Timeline></Timeline>*/}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
