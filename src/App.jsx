import { useState, useEffect, useRef } from "react";
import "./App.css";

function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // empty array: runs once, on first render

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Greeter";
  }, [name]); // runs whenever name changes

  return (
    <>
      <div>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <Greeting name={name || "Stranger"} />
      </div>
    </>
  );
}

export default App;
