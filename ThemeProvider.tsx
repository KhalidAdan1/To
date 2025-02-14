import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#000000';
    
  }, [theme]);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <SafeAreaView 
        className={`min-h-screen w-full ${
          theme === 'light' ? 'bg-white' : 'bg-black'
        }`}
      >
        {children}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}