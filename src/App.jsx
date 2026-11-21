import { useState, useEffect, useRef } from "react";

const skills = ["React", "Tailwind", "JavaScript"];

function Chip({ label }) {
  return (
    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-center text-sm font-medium text-indigo-700">
      {label}
    </span>
  );
}

function Greeting({ name }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
      Hello, <span className="text-indigo-600">{name}</span>!
    </h2>
  );
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
      <div className="flex items-center justify-center min-h-screen p-6 bg-slate-100">
        <div className="w-full max-w-md p-8 rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Greeter</p>
            <button
              className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
            >
              Dark
            </button>
          </div>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-6 w-full px-4 py-2 rounded-lg border border-slate-300"
          />
          <div className="mt-6">
            <Greeting name={name || "Stranger"} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {skills.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
