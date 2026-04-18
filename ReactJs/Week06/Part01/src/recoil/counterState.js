import { atom, useRecoilState } from "recoil";

export const counterState = atom({
  key: "part01CounterState",
  default: 0,
});

export function useCounter() {
  const [count, setCount] = useRecoilState(counterState);

  const increase = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrease = () => {
    setCount((currentCount) => currentCount - 1);
  };

  return { count, increase, decrease };
}
