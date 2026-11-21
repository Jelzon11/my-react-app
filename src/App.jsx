import { useState, useEffect, useRef } from "react";

const skills = ["React", "Tailwind", "JavaScript"];

function Chip({ label }) {
  return (
    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-center text-sm font-medium text-indigo-700 dark:text-indigo-300">
      {label}
    </span>
  );
}

function Greeting({ name }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
      Hello, <span className="text-indigo-600 dark:text-indigo-400">{name}</span>!
    </h2>
  );
}

function App() {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // empty array: runs once, on first render

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Greeter";
  }, [name]); // runs whenever name changes

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex items-center justify-center min-h-screen p-6 bg-slate-100 dark:bg-slate-950">
        <div className="w-full max-w-md p-8 md:max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Greeter</p>
            <button
              onClick={() => setDark(!dark)}
              className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700 active:scale-95 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-6 w-full px-4 py-2 rounded-lg border border-slate-300 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <div className="mt-6">
            <Greeting name={name || "Stranger"} />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {skills.map((s) => (
              <Chip key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
