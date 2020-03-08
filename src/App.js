import React from 'react';
import Navbar from './Components/Navbar';
import { Route,BrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Post from './Components/Post'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Route exact path = '/' component={Home}/>
          <Route path = '/About' component={About}/>
          <Route path = '/Contact' component={Contact}/>
          <Route path = '/posts/:postID' component={Post}/>

      </div>
    </BrowserRouter>
   
  );
}

export default App;
