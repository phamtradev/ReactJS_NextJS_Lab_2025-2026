import { useToast } from "../context/ToastContext";

export default function DemoButton() {
  const { showToast } = useToast();

  return (
    <button onClick={() => showToast("Thành công 🎉")}>
      Show Toast
    </button>
  );
}