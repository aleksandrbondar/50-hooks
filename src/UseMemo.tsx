import { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const computedValue = useMemo(() => {
    console.log('Computed value recalculated');
    return inputValue.split('').reverse().join('');
  }, [inputValue]);

  return (
    <div>
      <p>Зберігання обчислення функції, яка реагує на зміну значення інпуту, а не при кожній зміні стейту</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Reversed Input: {computedValue}</p>
    </div>
  );
};

export default UseMemo;