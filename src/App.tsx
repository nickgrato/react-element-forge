import { useState } from 'react';
import './App.scss';
import { Button } from 'react-element-forge';
// import { Button, IcontT } from '../dist/react-element-forge.es.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button text="tester" category="primary_solid" />
      <Button text="tester" category="secondary_outline" />
    </>
  );
}

export default App;
