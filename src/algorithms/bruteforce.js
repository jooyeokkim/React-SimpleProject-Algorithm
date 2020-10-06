import React, { Component } from 'react';
import '../App.css';
import bruteforce from '../images/bruteforce.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class Bruteforce extends Component{
    render(){
        return (
            <html>    
            <head>
                <meta charset="utf-8" />
                <title>Brute Force</title>
                </head>
                <body>
                <h1> Brute Force </h1>
                <p>
                    <strong>
                        컴퓨터 과학에서 무차별 검색 또는 철저한 검색 (생성 및 테스트라고도 함)은 솔루션에 대한 모든 가능한 후보를 체계적으로 열거하고 각 후보가 문제의 진술을 만족하는지 여부를 확인하는 매우 일반적인 문제 해결 기술 및 알고리즘 패러다임입니다.
                    </strong> 
                    </p>
                    <img src={bruteforce} width = "30%"></img>
                    <Link to="../" className="nav">홈으로</Link>
                </body>
            </html>
        );
    }
}

export default Bruteforce;