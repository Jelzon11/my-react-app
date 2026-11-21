import { useState, useEffect, useRef } from "react";

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
      <div className="min-h-screen p-6">
        <div className="mx-auto mt-24 max-w-md p-8">
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2"
          />
          <div className="mt-6">
            <Greeting name={name || "Stranger"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
