import { useState } from 'react';

function Todo() {
  const [todoList, settodoList] = useState([]);
  const [todoItem, settodoItem] = useState('');
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoItem) {
            settodoList([...todoList, todoItem]);
            settodoItem('');
          }
        }}
      >
        <label htmlFor="todo"> Add a todo</label>
        <br />
        <input
          id="todo"
          type="text"
          value={todoItem}
          onChange={(e) => settodoItem(e.target.value)}
        />
        <br />
        {todoItem && <p>Item to add : {todoItem}</p>}

        <input type="submit" value="Add" />
        <br />
      </form>

      {todoList.length > 0 && <h3>Todo List: </h3>}
      <ul>
        {todoList.map((todo) => {
          return (
            <>
              <li> {todo}</li>
              <input
                type="submit"
                value="delete"
                onClick={() => {
                  settodoList(todoList.filter((item) => item !== todo));
                }}
              />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
