import { SearchProvider } from "./context/SearchContext";
import SearchBox from "./components/SearchBox";
import ResultList from "./components/ResultList";

function App() {
  return (
    <SearchProvider>
      <h1>Search Users</h1>
      <SearchBox />
      <ResultList />
    </SearchProvider>
  );
}

export default App;