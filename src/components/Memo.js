import React, { useEffect, useRef, useState } from 'react';

function Memo() {
  const counterRef = useRef(null);
  const [count, setcount] = useState(0);

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setcount((prevCount) => {
        if (prevCount === 15) {
          clearInterval(counterRef.current);
        } else {
          prevCount += 1;
        }

        return prevCount;
      });
    }, 1000);

    return () => {
      clearInterval(counterRef.current);
    };
  }, []);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          clearInterval(counterRef.current);
        }}
      >
        Stop counter
      </button>

      {count === 15 && <h1>Time Reached</h1>}
    </>
  );
}

export default Memo;
