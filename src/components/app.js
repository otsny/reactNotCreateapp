// import React, { Component } from 'react';
// class App extends Component {
//     render() {
//         return (<h1>My React App</h1>)
//     }
// }

// 関数コンポーネントで書き換えてみる
import React from "react";

console.log('app.js start');

function App(props) {
    // const this.props.msg = 'asdf'
    // console.log(this.props);
    console.log(props.msg);
    return (
        <div>render from app.js  {props.msg}</div>
        );
}

export default App;