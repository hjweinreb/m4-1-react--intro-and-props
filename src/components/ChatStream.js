import React from 'react';

import './ChatStream.css';

import ChatMessage from './ChatMessage';


// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map((message, index) => {
        //console.log(index)
        return <ChatMessage key={index} message={message} currentUser={props.currentUser} />;

      })}
    </section>
  );
}

export default ChatStream;



/*let messageType;
       if (message.user === props.currentUser) {
         messageType === 'sent';
       } else {
         messageType === 'received';
       }

       return (
          <ChatMessage
            user={message.user}
            body={message.body}
           messageType={messageType}
          />
       );
*/
