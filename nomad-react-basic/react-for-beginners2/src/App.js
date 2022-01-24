import Button from './Button';
import styled from './App.module.css';
import { useEffect, useState } from 'react';

function Hello() {
  function destroyFn() {
    console.log('bye :(');
  }

  function effectFn() {
    console.log('created :)');

    return destroyFn;
  }

  useEffect(effectFn, []);
  return <div>Hello</div>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => setShowing(!prev));

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'show'}</button>
    </div>
  );
}

export default App;
