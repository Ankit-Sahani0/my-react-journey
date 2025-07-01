# 🔐 React Password Generator

A simple and responsive password generator built using React, Tailwind CSS, and modern React Hooks like `useState`, `useEffect`, `useCallback`, and `useRef`.

---

## 🚀 Features

- Generate random passwords instantly
- Adjustable password length (6 to 99)
- Toggle inclusion of numbers and special characters
- Copy password to clipboard with one click
- Clean and modern UI with Tailwind CSS

---

## ⚙️ React Hooks Used

### `useState()`
Used to manage local UI states:
- `length` → Password length
- `numberAllowed` → Whether numbers should be included
- `charAllowed` → Whether special characters should be included
- `password` → The final generated password

### `useEffect()`
Automatically regenerates the password whenever:
- `length` changes
- `numberAllowed` toggles
- `charAllowed` toggles

```js
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, passwordGenerator]);

