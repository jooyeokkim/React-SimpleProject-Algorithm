import React, { Component } from 'react';
import '../App.css';
import dfs from '../images/dfs.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class Dfs extends Component{
    render(){
        return (
            <html>    
            <head>
                <meta charset="utf-8" />
                <title>DFS</title>
                </head>
                <body>
                <h1> DFS </h1>
                <p>
                    <strong>
                        깊이 우선 탐색은 맹목적 탐색방법의 하나로 탐색트리의 최근에 첨가된 노드를 선택하고, 이 노드에 적용 가능한 동작자 중 하나를 적용하여 트리에 다음 수준의 한 개의 자식노드를 첨가하며, 첨가된 자식 노드가 목표노드일 때까지 앞의 자식 노드의 첨가 과정을 반복해 가는 방식이다.
                    </strong> 
                    </p>
                    <img src={dfs} width = "30%"></img>
                    <Link to="../" className="nav">홈으로</Link>
                </body>
            </html>
        );
    }
}

export default Dfs;