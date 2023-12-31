'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const ToggleThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-black`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? 'Light' : 'Dark'}
        </button>
    );
};
