/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  const decrement = () => {
    setCount((count) => count - 1)
  }

  useEffect(() => {
    console.log('Decrement with NO useCallback mounted');
  }, [decrement])

  useEffect(() => {
    console.log('Decrement with useCallback mounted');
  }, [increment])

  return (
    <div style={{ padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <h1 style={{ textAlign: 'center' }}>Use layout effect</h1>
      <p>Зберігання функції від пере-рендерингу. На прикладі дві функції, одна з них збережена від пере-рендерингу, інша, рендериться кожен раз коли відбувається зміна стейту</p>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</ button>
      <button onClick={decrement}>decrement</ button>
      <br />
    </div>
  );
};

export default UseCallback;