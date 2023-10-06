import React, { useEffect, useState } from 'react';
import { client } from 'websocket';

function LatencyDisplay() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const ws = new client();
    ws.connect('ws://localhost:55455');

    ws.on('message', (message) => {
      if (message.type === 'utf8') {
        const data = JSON.parse(message.utf8Data);
        if (data.timestamp) {
          const packetTimestamp = data.timestamp; // Corrected typo: "timesstamp" to "timestamp"
          const currentTimestamp = Date.now();
          const packetLatency = currentTimestamp - packetTimestamp;

          setLatency(packetLatency);
        }
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="latency-display">
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Waiting for latency data...</p>
      )}
    </div>
  );
}

export default LatencyDisplay;
