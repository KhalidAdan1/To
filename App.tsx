import React, { createContext, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import './global.css';
import 'nativewind';


export const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
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


export default function App() {
  return (
    <ThemeProvider>
      <View className="flex-1 items-center justify-center">
        <Text className="text-blue-500">Hello, Theme Toggle!</Text>
      </View>
    </ThemeProvider>
  );
}