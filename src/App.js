// import { useEffect, useState } from 'react';

// import Todo from './components/Todo';
// import { v4 as uuidv4 } from 'uuid';
// import Todo from './components/Todo.js';
// import Memo from './components/Memo';
import withFavoriteNumer from './components/withFavoriteNumer';
import './styles.css';
import Dialog from './components/Dialog';
// impdiaort Cta from './components/Cta';
// import Card from './components/card';
// import { Data } from './data';
function App(props) {
  // const data = Data();

  return (
    <Dialog
      render={(isBtn) => {
        isBtn ? <button> submit</button> : <p>No btn</p>;
      }}
    />
  );
  // <h1>number : {props.number}</h1>;
  // <>
  //   <Cta>
  //     {data.map((card) => (
  //       <Card imgSrc={card.imgSrc} title={card.title} />
  //     ))}
  //   </Cta>
  //   {/* <Memo /> */}
  // </>
}

export default withFavoriteNumer(App);
