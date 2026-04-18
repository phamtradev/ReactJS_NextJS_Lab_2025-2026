import { useState, useEffect } from "react";
import { useSearch } from "../recoil/searchState";
import useDebounce from "../hooks/useDebounce";

export default function SearchBox() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  const { searchAPI } = useSearch();

  useEffect(() => {
    searchAPI(debouncedText);
  }, [debouncedText, searchAPI]);

  return (
    <input
      placeholder="Search user..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
