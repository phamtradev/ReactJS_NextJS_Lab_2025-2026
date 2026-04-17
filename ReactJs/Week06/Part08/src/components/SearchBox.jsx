import { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import useDebounce from "../hooks/useDebounce";

export default function SearchBox() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  const { searchAPI } = useSearch();

  useEffect(() => {
    searchAPI(debouncedText);
  }, [debouncedText]);

  return (
    <input
      placeholder="Search user..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}