import React from 'react';
import Banner from './banner';
import Card from './Card';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant App" />
      <Exhibit>
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
