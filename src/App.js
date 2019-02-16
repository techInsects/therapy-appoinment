import React, { Component } from 'react';
import Main from './components/MainComponent';
import fire from './components/fire';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/HomeCompoment';







class App extends Component {
  constructor(props){
    super(props);
      }
 
  
  render() {
    return (
      
        <BrowserRouter>
          <div className="App">
            <Main />
            
          </div>
        </BrowserRouter>
      
    );
  }
}

export default App;
