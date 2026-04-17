import { useCounter } from "../context/CounterContext";


export default function ComponentB() {
  const { increase, decrease } = useCounter();

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
