import React, { useState } from 'react';


import { Card } from 'antd'
import axios from 'axios'

// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';



const getConfig = (id: number) => {
  axios.get('https://api.srvio.pro/api/configs/' + id)
}

const users = ["tpa", "fva"]

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    id: 1,
    username: 'user',
    config: { ip: '10.8.0.10' },
  });

  const View = (data: any[]) => {
    return Object.entries(data).map((i) => <div>{Object.values(i)[0]}</div>);
  };

  


  return (
    <>

    <Card title={"Users"} key={"users"} extra={["A", "B"]} actions={[1]}>
      <div>{user.id}</div>
      <div>{user.username}</div>
      <p className="read-the-docs"></p>

      </Card>
    </>
  );
}

export default App;
