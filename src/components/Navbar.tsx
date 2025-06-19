'use client'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
