# my-react-app — Jel in Code

The Greeter + task app we build in the **Jel in Code** React series ("Start Early!"), made with **React + Vite**, styled with **Tailwind CSS v4**.

📺 YouTube: https://www.youtube.com/@jelincodeyt
📺 React JS playlist: https://www.youtube.com/playlist?list=PL5bDajeCYQMu748cAymdyfweWuH1GOvxe

## Run it

```bash
npm install
npm run dev
```

Then open the link Vite shows (usually http://localhost:5173).

## Follow along chapter by chapter (Part 4: Task app, CRUD + localStorage)

We turn the Greeter into a task app that can **C**reate, **R**ead, **U**pdate and **D**elete tasks, and remembers them in `localStorage` (no database yet). Switch to a chapter locally with `git checkout ep4-ch05` (and `git checkout main` to come back).

| Chapter | What we add | Code |
|---|---|---|
| Start | The finished Greeter from part 3 | [ep4-ch00](https://github.com/Jelzon11/my-react-app/tree/ep4-ch00) |
| 01 Read | Tasks in state as an array of objects, shown with `.map()` | [ep4-ch01](https://github.com/Jelzon11/my-react-app/tree/ep4-ch01) |
| 02 Create | A form, `onSubmit`, `preventDefault`, `[...tasks, newTask]` | [ep4-ch02](https://github.com/Jelzon11/my-react-app/tree/ep4-ch02) |
| 03 Update: done | A checkbox, `map` + `{ ...t, done: !t.done }`, line-through | [ep4-ch03](https://github.com/Jelzon11/my-react-app/tree/ep4-ch03) |
| 04 Delete | A Delete button and `filter` | [ep4-ch04](https://github.com/Jelzon11/my-react-app/tree/ep4-ch04) |
| 05 Update: edit | Edit mode with a draft, Save (Enter) and Cancel (Esc) | [ep4-ch05](https://github.com/Jelzon11/my-react-app/tree/ep4-ch05) |
| 06 localStorage | Save with `useEffect`, load with `useState(() => ...)` | [ep4-ch06](https://github.com/Jelzon11/my-react-app/tree/ep4-ch06) |
| 07 Counter | "You have 2 tasks left" and an empty message | [ep4-ch07](https://github.com/Jelzon11/my-react-app/tree/ep4-ch07) |
| 08 Filters | All / Active / Done and Clear done | [ep4-ch08](https://github.com/Jelzon11/my-react-app/tree/ep4-ch08) |
| 09 Custom hook | `useLocalStorage` remembers tasks, name and dark mode | [ep4-ch09](https://github.com/Jelzon11/my-react-app/tree/ep4-ch09) |

## Follow along chapter by chapter (Part 3: Tailwind CSS)

Every chapter of the Tailwind video is saved as its own step. Click a chapter to see the code exactly as it is at the end of that chapter. You can also switch to it locally with `git checkout ch05` (and `git checkout main` to come back).

| Chapter | What we add | Code |
|---|---|---|
| Start | Tailwind removed: plain, boring HTML | [ch00](https://github.com/Jelzon11/my-react-app/tree/ch00) |
| 01 Utility-first | Delete `App.css` | [ch01](https://github.com/Jelzon11/my-react-app/tree/ch01) |
| 02 Install | `tailwindcss` + `@tailwindcss/vite`, `@import "tailwindcss"` | [ch02](https://github.com/Jelzon11/my-react-app/tree/ch02) |
| 03 Spacing | `min-h-screen`, `p-6`, `mx-auto`, `max-w-md`, `px-4 py-2` | [ch03](https://github.com/Jelzon11/my-react-app/tree/ch03) |
| 04 Typography | `text-3xl`, `font-bold`, `tracking-widest`, `uppercase` | [ch04](https://github.com/Jelzon11/my-react-app/tree/ch04) |
| 05 Colors | `bg-slate-100`, `text-slate-900`, `text-indigo-600` | [ch05](https://github.com/Jelzon11/my-react-app/tree/ch05) |
| 06 Borders | `rounded-2xl`, `border`, `shadow-xl` | [ch06](https://github.com/Jelzon11/my-react-app/tree/ch06) |
| 07 Layout | `flex`, `items-center`, `justify-between`, `grid grid-cols-3` | [ch07](https://github.com/Jelzon11/my-react-app/tree/ch07) |
| 08 States | `hover:`, `focus:`, `active:`, `transition` | [ch08](https://github.com/Jelzon11/my-react-app/tree/ch08) |
| 09 Responsive | `sm:grid-cols-3`, `md:text-4xl`, `md:max-w-2xl` | [ch09](https://github.com/Jelzon11/my-react-app/tree/ch09) |
| 10 Dark mode | `@custom-variant dark`, a toggle button, `dark:` classes | [ch10](https://github.com/Jelzon11/my-react-app/tree/ch10) |
| 11 Pro tips | `@theme` brand color, conditional classes, the `Chip` component | [ch11](https://github.com/Jelzon11/my-react-app/tree/ch11) |

💬 Stuck? Ask in the comments of the video and I'll help.
