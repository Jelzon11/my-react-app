import { useState, useEffect, useRef } from "react";

const starterTasks = [
  { id: 1, text: "Learn React basics", done: true },
  { id: 2, text: "Style it with Tailwind", done: true },
  { id: 3, text: "Build a task app", done: false },
];

function Greeting({ name }) {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
      Hello,{" "}
      <span className={name ? "text-brand-500" : "italic text-slate-400"}>
        {name || "Stranger"}
      </span>
      !
    </h2>
  );
}

function TaskItem({ task }) {
  return (
    <li className="flex items-center gap-3 py-2">
      <span className="flex-1 text-slate-800 dark:text-slate-100">
        {task.text}
      </span>
    </li>
  );
}

function App() {
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const [tasks] = useState(starterTasks);
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
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Greeter
            </p>
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
            className="mt-6 w-full px-4 py-2 rounded-lg border border-slate-300 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <div className="mt-6">
            <Greeting name={name} />
          </div>
          {/* READ: show every task */}
          <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
