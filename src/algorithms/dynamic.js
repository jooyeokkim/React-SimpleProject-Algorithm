import React, { Component } from 'react';
import '../App.css';
import dynamic from '../images/dynamic.jpg';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

class Dynamic extends Component{
    render(){
        return (
            <html>    
            <head>
                <meta charset="utf-8" />
                <title>Dynamic algorithm</title>
                </head>
                <body>
                <h1> Dynamic algorithm </h1>
                <p>
                    <strong>
                        동적 계획법의 원리는 매우 간단하다. 
                        일반적으로 주어진 문제를 풀기 위해서, 문제를 여러 개의 하위 문제(subproblem)로 나누어 푼 다음,
                        그것을 결합하여 최종적인 목적에 도달하는 것이다. 
                        각 하위 문제의 해결을 계산한 뒤, 그 해결책을 저장하여 후에 같은 하위 문제가 나왔을 경우 그것을 간단하게 해결할 수 있다.
                        이러한 방법으로 동적 계획법은 계산 횟수를 줄일 수 있다. 
                        특히 이 방법은 하위 문제의 수가 기하급수적으로 증가할 때 유용하다.
                        동적 계획 알고리즘은 최단 경로 문제, 행렬의 제곱 문제 등의 최적화에 사용된다.
                        이것은 동적 계획법은 문제를 해결하기 위한 모든 방법을 검토하고, 그 중에 최적의 풀이법을 찾아내기 때문이다. 
                        이에 우리는 동적 계획법을 모든 방법을 일일이 검토하여 그 중 최적해를 찾아내는 주먹구구식 방법이라고 생각할 수 있다. 
                        그러나 문제가 가능한 모든 방법을 충분히 빠른 속도로 처리할 수 있는 경우, 동적 계획법은 최적의 해법이라고 말할 수 있다.
                        때로는 단순한 재귀함수에 저장 수열(이전의 데이터를 모두 입력하는 수열)을 대입하는 것 만으로도 최적해를 구할 수 있는 동적 알고리즘을 찾을 수 있다. 
                        그러나 대다수의 문제는 이보다 훨씬 더 복잡한 프로그래밍을 요구한다. 
                        그 중에 일부는 여러 개의 매개 변수를 이용하여 재귀 함수를 작성해야 하는 것도 있고, 아예 이러한 방법으로 동적 알고리즘을 짤 수 없는 문제 또한 존재한다. 
                        이러한 퍼즐로는 대표적으로 Egg Dropping Puzzle이 있다.
                    </strong> 
                    </p>
                    <img src={dynamic} width = "30%"></img>
                    <Link to="../" className="nav">홈으로</Link>
                </body>
            </html>
        );
    }
}

export default Dynamic;