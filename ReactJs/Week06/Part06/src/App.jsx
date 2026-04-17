import { ToastProvider } from "./context/ToastContext";
import Toast from "./components/Toast";
import DemoButton from "./components/DemoButton";

function App() {
  return (
    <ToastProvider>
      <Toast />
      <DemoButton />
    </ToastProvider>
  );
}

export default App;