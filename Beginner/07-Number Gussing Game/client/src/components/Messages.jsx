import React from 'react';

const Messages = ({message}) => {
  return (
     <div className=' p-10 overflow-scroll h-40 text-start leading-7'>
          {message && message.map((e,i)=> <p>{i+1}){e}</p>)}
        </div>
  );
};

export default Messages;