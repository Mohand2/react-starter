import { useState, useEffect } from 'react';

// import Todo from './components/Todo';
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo.js'

function App() {
  const [id, setId] = useState(uuidv4());

  useEffect(() => {
    // setShowNotif(true);

    return () => {};
  }, [id]);

  const handleClick = () => {
    setId(uuidv4());
  };

  return (
    <>
      <h1 onClick={handleClick}>Id: {id}</h1>
      <Todo/>
    </>
  );
}

export default App;
