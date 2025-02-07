import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import './global.css';
import 'nativewind';
import { ThemeContext, ThemeProvider } from './ThemeProvider';

export default function App() {
  // Consume the context inside the ThemeProvider
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

// Separate component to consume the context
const AppContent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className={theme === 'light' ? 'text-blue-500' : 'text-white'}>
        Hello, Theme Toggle!
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};