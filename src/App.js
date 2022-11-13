import Todo from './components/Todo';
import {v4 as uuidv4} from 'uuid'

function App() {
  return (
    <>
      <Todo />
      <h1 >Id = {uuidv4() }</h1>
    </>
  );
}

export default App;
 
