import { useState, useEffect, useRef } from "react";

const starterTasks = [
  { id: 1, text: "Learn React basics", done: true },
  { id: 2, text: "Style it with Tailwind", done: true },
  { id: 3, text: "Build a task app", done: false },
];

const filters = ["All", "Active", "Done"];

// A custom hook: useState that remembers its value in localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // save whenever value changes

  return [value, setValue];
}

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

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);

  function startEdit() {
    setDraft(task.text);
    setEditing(true);
  }

  function save(e) {
    e.preventDefault();
    if (draft.trim()) onEdit(task.id, draft.trim());
    setEditing(false);
  }

  if (editing) {
    return (
      <li className="py-2">
        <form onSubmit={save} className="flex items-center gap-2">
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setEditing(false)}
            className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <button className="rounded-lg bg-brand-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-95">
            Save
          </button>
        </form>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 py-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        className="size-5 accent-brand-500"
      />
      <span
        className={
          task.done
            ? "flex-1 text-slate-400 line-through"
            : "flex-1 text-slate-800 dark:text-slate-100"
        }
      >
        {task.text}
      </span>
      <button
        onClick={startEdit}
        className="rounded-lg px-2 py-1 text-sm text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(task.id)}
        className="rounded-lg px-2 py-1 text-sm text-slate-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
      >
        Delete
      </button>
    </li>
  );
}

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [dark, setDark] = useLocalStorage("dark", false);
  const [tasks, setTasks] = useLocalStorage("tasks", starterTasks);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("All");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); // empty array: runs once, on first render

  useEffect(() => {
    document.title = name ? `Hello, ${name}!` : "Greeter";
  }, [name]); // runs whenever name changes

  // CREATE: add a new task
  function addTask(e) {
    e.preventDefault(); // stop the form from reloading the page
    if (!text.trim()) return; // ignore empty tasks
    const newTask = { id: crypto.randomUUID(), text: text.trim(), done: false };
    setTasks([...tasks, newTask]);
    setText("");
  }

  // UPDATE: tick a task on or off
  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  // UPDATE: change a task's text
  function editTask(id, newText) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  }

  // DELETE: remove a task
  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function clearDone() {
    setTasks(tasks.filter((t) => !t.done));
  }

  const left = tasks.filter((t) => !t.done).length;
  const visible = tasks.filter((t) =>
    filter === "Active" ? !t.done : filter === "Done" ? t.done : true,
  );

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
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              {left === 0
                ? "All done! 🎉"
                : `You have ${left} ${left === 1 ? "task" : "tasks"} left.`}
            </p>
          </div>
          <form onSubmit={addTask} className="mt-6 flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task..."
              className="flex-1 px-4 py-2 rounded-lg border border-slate-300 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
            <button className="rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition hover:opacity-90 active:scale-95">
              Add
            </button>
          </form>
          <div className="mt-4 flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={
                  filter === f
                    ? "rounded-full bg-brand-500 px-3 py-1 text-sm font-medium text-white"
                    : "rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                }
              >
                {f}
              </button>
            ))}
            <button
              onClick={clearDone}
              className="ml-auto text-sm text-slate-400 transition hover:text-red-600"
            >
              Clear done
            </button>
          </div>
          {/* READ: show every task */}
          <ul className="mt-4 divide-y divide-slate-200 dark:divide-slate-800">
            {visible.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            ))}
          </ul>
          {visible.length === 0 && (
            <p className="py-6 text-center text-slate-400">Nothing here yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
