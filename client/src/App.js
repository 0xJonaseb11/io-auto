import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const RealTimeComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000')

    socket.io('update', (data) => {
      setMessage(data.message);
    });


    // clean up the socket connection when the component unmounts
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h1>Real time updates</h1>
      <p>{message}</p>
    </div>
  );
};
