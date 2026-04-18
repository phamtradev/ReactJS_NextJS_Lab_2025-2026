import { useCounter } from "../recoil/counterState";


export default function ComponentA() {
  const { count } = useCounter();

  return <h2>Count: {count}</h2>;
}
