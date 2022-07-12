// import logo from "./logo.svg";
import './App.css';
// import { Fragment } from "react";
import { Component } from 'react';

// 함수 컴포넌트
// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// 클래스형 컴포넌트
class App extends Component {
    render() {
        const name = 'react';
        return <div className="react">{name}</div>;
    }
}

export default App;
