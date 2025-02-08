import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { ThemeProvider } from './ThemeProvider';
import { ThemeContext } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <View className="min-h-screen w-full items-center justify-center">
      <Text 
        className={`text-lg mb-4 ${
          theme === 'light' ? 'text-black' : 'text-white'
        }`}
      >
        Hello, Theme Toggle!
      </Text>
      <Button 
        title="Toggle Theme" 
        onPress={toggleTheme}
      />
    </View>
  );
};