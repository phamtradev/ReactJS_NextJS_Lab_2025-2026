import { useToast } from "../recoil/toastState";

export default function Toast() {
  const { toast } = useToast();

  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: "black",
        color: "white",
        padding: "10px 15px",
        borderRadius: 8,
      }}
    >
      {toast}
    </div>
  );
}
