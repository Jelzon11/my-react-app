import { useState, useEffect, useRef } from "react";
import "./App.css";

function Greeting({ name }) {
  return <h2 className="text-3xl font-bold text-indigo-600">Hello, {name}!</h2>;
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100">
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
