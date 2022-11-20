import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
  { name: '🤍 - Light', value: 'light' },
  { name: '🖤 - Dark', value: 'dark' },
  { name: '🖤 - Amoled', value: 'amoled' },
  { name: '🖤 - CornHub', value: 'corn' },
];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">Choose theme:</label>
        <select
          name="theme"
          id="theme-select"
          className="bg-th-background text-th-primary border-th-secondary border-2 rounded-lg py-1 px-3 font-semibold"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">❤️ Select Theme</option>
          {themes.map(t => (
            <option key={t.name.toLowerCase()} value={t.value.toLowerCase()}>{t.name}</option>
          )
          )}
        </select>
      </div>
    </div>
  );
};

export default ThemeChanger;