import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

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
      <div>{user.id}</div>
      <div>{user.username}</div>

      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
