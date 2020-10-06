import React, { Component } from 'react';
import '../App.css';
import algorithm from '../images/algorithm.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


class Home extends Component{
    render(){
        return (
            <html>    
            <head>
                <meta charset="utf-8" />
                <title>Welcome!</title>
                </head>
                <body>
                <h1> Welcome! </h1>
                <div className='notice'> 설명을 들을 알고리즘을 클릭하세요! </div>
                <div><a href ="https://kimcoder.tistory.com" className='kimcoder'>김코더 김주역 블로그</a></div>
                <p>
                    <ul>
                        <li><Link to="dynamic" className="nav">동적계획법(다이나믹)</Link></li>
                        <li><Link to="greedy" className="nav">탐욕(그리디)</Link></li>
                        <li><Link to="bfs" className="nav">BFS(너비우선탐색)</Link></li>
                        <li><Link to="dfs" className="nav">DFS(깊이우선탐색)</Link></li>
                        <li><Link to="bruteforce" className="nav">브루트 포스(완전탐색)</Link></li>
                    </ul>
                </p>
                <img src={algorithm} width = "30%"></img>
                </body>
            </html>
        );
    }
}

export default Home;