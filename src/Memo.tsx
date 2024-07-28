import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onButtonClick }: { onButtonClick: () => void }) => {
  console.log('ChildComponent re-rendered');
  return <button onClick={onButtonClick}>Click me</button>;
});

const Memo = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div style={{ padding: '20px', margin: '20px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
      <h1 style={{ textAlign: 'center' }}>Memo</h1>
      <p>Меморізували дочірній компонент, який залежить від функції батьківського, відповідно при пере рендерингу батьківського, дочірній не змінювався</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
};

export default Memo;