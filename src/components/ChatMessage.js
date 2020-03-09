import React from 'react';

import './ChatMessage.css';


function ChatMessage(props) {
    console.log(props)
    let currentUserClass;
    if (props.message.user.username === props.currentUser.username) {
        currentUserClass = "current"
    }
    return <div className={`chat-message ${currentUserClass}`}>
        <img className="user-image" src={props.message.user.avatar} alt={props.message.user.username + " avatar"} />
        <span>{props.message.user.username}:</span>
        <span> {props.message.body} </span>
    </div>
}

export default ChatMessage;


