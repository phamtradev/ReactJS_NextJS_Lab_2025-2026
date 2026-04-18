import { atom, useRecoilValue, useSetRecoilState } from "recoil";

let toastTimerId;

export const toastState = atom({
  key: "part06ToastState",
  default: null,
});

export function useToast() {
  const toast = useRecoilValue(toastState);
  const setToast = useSetRecoilState(toastState);

  const showToast = (message) => {
    setToast(message);

    if (toastTimerId) {
      window.clearTimeout(toastTimerId);
    }

    toastTimerId = window.setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return { toast, showToast };
}
