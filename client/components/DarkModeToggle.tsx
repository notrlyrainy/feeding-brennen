'use client';

import { useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-700"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  );
}