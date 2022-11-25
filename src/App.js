// import { useEffect } from 'react';

// import Todo from './components/Todo';
// import { v4 as uuidv4 } from 'uuid';
// import Todo from './components/Todo.js';
// import Memo from './components/Memo';

import './styles.css';
import Cta from './components/Cta';
import Card from './components/card';
import { Data } from './data';
function App() {
  //   const [id, setId] = useState(uuidv4());

  //   useEffect(() => {

  //     return () => {};
  //   }, [id]);

  //   const handleClick = () => {
  //     setId(uuidv4());
  //   };

  const data = Data();

  return (
    <>
      <Cta>
        {data.map((card) => (
          <Card imgSrc={card.imgSrc} title={card.title} />
        ))}
      </Cta>

      {/* <Memo /> */}
    </>
  );
}

export default App;
