import React, { Component } from 'react';
import '../App.css';
import bfs from '../images/bfs.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class Bfs extends Component{
    render(){
        return (
            <html>    
            <head>
                <meta charset="utf-8" />
                <title>BFS</title>
                </head>
                <body>
                <h1> BFS </h1>
                <p>
                    <strong>
                        너비 우선 탐색은 맹목적 탐색방법의 하나로 시작 정점을 방문한 후 시작 정점에 인접한 모든 정점들을 우선 방문하는 방법이다. 
                        더 이상 방문하지 않은 정점이 없을 때까지 방문하지 않은 모든 정점들에 대해서도 너비 우선 검색을 적용한다.
                    </strong> 
                    </p>
                    <img src={bfs} width = "30%"></img>
                    <Link to="../" className="nav">홈으로</Link>
                </body>
            </html>
        );
    }
}

export default Bfs;