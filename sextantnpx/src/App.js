import React from 'react';
import Banner from './banner';
import Card from './Card';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';

function App() {
  return (
    <div className="App">
      <Banner title="Cisco APP" />
      <Exhibit><IPDisplay ipv4={true} />
        <IPDisplay ipv4={false} />
        <Card title="Public IP" value="192.168.1.1" />
        <Card title="Latency" value="25ms" />
        <Card title="Data Point 3" value="Some value 3" />
        <Card title="Data Point 4" value="Some value 4" />
        <Card title="Data Point 5" value="Some value 5" />
      </Exhibit>
    </div>
  );
}

export default App;
