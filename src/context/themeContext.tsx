// Filename: src/context/ThemeContext.tsx

import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const defaultValues: ThemeContextType = {
  isDarkMode: false, // Default to light mode
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultValues);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultValues.isDarkMode);

  useEffect(() => {
    // Toggle the 'dark' class on the body element
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
