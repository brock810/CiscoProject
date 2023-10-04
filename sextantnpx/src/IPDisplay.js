// IPDisplay.js
import React, { useEffect, useState } from 'react';

function IPDisplay({ ipv4 }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const ipifyURL = ipv4
      ? 'https://api.ipify.org?format=json'
      : 'https://api6.ipify.org?format=json';

    fetch(ipifyURL)
      .then((response) => response.json())
      .then((data) => {
        setIPAddress(data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv4]);

  return (
    <div className="ip-display">
      <h2>{ipv4 ? 'IPv4 Address' : 'IPv6 Address'}</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPDisplay;
