// import { useEffect } from 'react';

// import Todo from './components/Todo';
// import { v4 as uuidv4 } from 'uuid';
// import Todo from './components/Todo.js';
// import Memo from './components/Memo';

import './styles.css';
import Cta from './components/Cta';

function App() {
  //   const [id, setId] = useState(uuidv4());

  //   useEffect(() => {

  //     return () => {};
  //   }, [id]);

  //   const handleClick = () => {
  //     setId(uuidv4());
  //   };

  return (
    <>
      <Cta color={'red'}>
        <p>hi im from app js </p>
      </Cta>

      {/* <Memo /> */}
    </>
  );
}

export default App;
