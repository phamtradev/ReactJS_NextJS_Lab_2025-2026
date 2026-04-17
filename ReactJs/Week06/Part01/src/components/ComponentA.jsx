import { useCounter } from "../context/CounterContext";


export default function ComponentA() {
  const { count } = useCounter();

  return <h2>Count: {count}</h2>;
}