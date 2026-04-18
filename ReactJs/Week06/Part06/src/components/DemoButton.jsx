import { useToast } from "../recoil/toastState";

export default function DemoButton() {
  const { showToast } = useToast();

  return (
    <button onClick={() => showToast("Thành công 🎉")}>
      Show Toast
    </button>
  );
}
