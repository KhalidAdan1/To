import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ThemeContext from './ThemeContext'; 


interface ThemeProviderProps {
  children: React.ReactNode; 
}

 const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <SafeAreaView className={theme === 'light' ? 'bg-white' : 'bg-black'}>
        {children}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;