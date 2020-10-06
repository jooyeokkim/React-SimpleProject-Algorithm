import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './App.css';
import Dynamic from './algorithms/dynamic';
import Greedy from './algorithms/greedy';
import Bfs from './algorithms/bfs';
import Dfs from './algorithms/dfs';
import Bruteforce from './algorithms/bruteforce';
import Home from './algorithms/home';


function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>React App</title>
        </head>
        <body>
          <Route exact path="/dynamic"><Dynamic></Dynamic></Route>
          <Route exact path="/greedy"><Greedy></Greedy></Route>
          <Route exact path="/bfs"><Bfs></Bfs></Route>
          <Route exact path="/dfs"><Dfs></Dfs></Route>
          <Route exact path="/bruteforce"><Bruteforce></Bruteforce></Route>
          <Route exact path="/"><Home></Home></Route>
        </body>
      </html>
    </div>
  );
}

export default App;
