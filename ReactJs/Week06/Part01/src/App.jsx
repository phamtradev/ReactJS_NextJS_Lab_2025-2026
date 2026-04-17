import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { CounterProvider } from "./context/CounterContext";


function App() {
  return (
    <CounterProvider>
      <ComponentA />
      <ComponentB />
    </CounterProvider>
  );
}

export default App;