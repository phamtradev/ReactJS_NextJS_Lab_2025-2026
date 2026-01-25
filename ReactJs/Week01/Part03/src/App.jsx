import { useState } from "react";
import Alert from "./components/Alert/Alert";

function App() {
  const [alertType, setAlertType] = useState(null);
  return (
    <>
      <div className="app">
        <Alert
          type={alertType}
          message={
            alertType === "success"
              ? "Action successful!"
              : alertType === "warning"
                ? "Warning! Check again!"
                : alertType === "error"
                  ? "Something went wrong!"
                  : ""
          }
        />

        <div className="buttons">
          <button onClick={() => setAlertType("success")}>Success</button>
          <button onClick={() => setAlertType("warning")}>Warning</button>
          <button onClick={() => setAlertType("error")}>Error</button>
        </div>
      </div>
    </>
  );
}

export default App;
