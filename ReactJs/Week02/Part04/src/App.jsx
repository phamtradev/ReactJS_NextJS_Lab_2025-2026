import { useState } from "react";
import StatusBadge from "./components/StatusBadge/StatusBadge";
import "./App.css";

function App() {
  const [status, setStatus] = useState("offline");

  return (
    <div className="app">
      <div className="container">
        <h1>Trạng Thái Người Dùng</h1>

        <StatusBadge status={status} />

        <div className="button-group">
          <button onClick={() => setStatus("online")} className="btn">
            Online
          </button>
          <button onClick={() => setStatus("offline")} className="btn">
            Offline
          </button>
          <button onClick={() => setStatus("busy")} className="btn">
            Busy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
