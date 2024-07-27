/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
const UseCallback = () => {
  const [count, setCount] = React.useState(0);

  const memoizedUseCallbackFunc = React.useCallback(() => {
    console.log('memoizedCallback re-rendered');
  }, []);

  const noUseCallbackFunc = (() => {
     console.log('noCallback function re-rendered when count is increased');
  })();

  return (
    <div>
      <p>Дві функції з самовикликом, Одна з них повторно виконується при кожній зміні стейту(натискання кнопки). Інша, меморізована завдяки UseCallback викликалась лише один раз, при першому рендерингу.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseCallback;