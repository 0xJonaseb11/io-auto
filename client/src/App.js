import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const RealTimeComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000')
    
  })
}
