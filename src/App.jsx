// App.js
import { useState } from 'react';
import './App.css';
import Header from './componed/header/header';
import Sing from './componed/sign/sing';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
        <Header />
        <Sing></Sing>
    </div>
  );
}

export default App;
