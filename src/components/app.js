// import React, { Component } from 'react';
// class App extends Component {
//     render() {
//         return (<h1>My React App</h1>)
//     }
// }

// 関数コンポーネントで書き換えてみる
import React from "react";


// mongoose接続
var mongoose = require('mongoose');
const options = {
	useUnifiedTopology : true,
	useNewUrlParser : true
}
var Message = require('/src/models/Message');
// mongoose.connect('mongodb://localhost:27017/chatapp',options,function(err){

console.log('connect start');
// mongoose.connect('mongodb://root:root@localhost:27017/chatapp?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',options,function(err){
//     if(err){
//         console.error(err);
//     }else{
//         console.log("successfully connected to MongoDB.");
//     }
// });
console.log('connect end');

function App(props) {

    // Message.find({}, function(err, msgs){
    //     if(err) throw err;
    //     this.props.msgs = msgs;
    //     // return res.render('index',  { messages: msgs });
    // });
    return (
        <div>render from app.js {props.msg}</div>
        );
}

export default App;