import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ListGiveInput from './components/ListGiveInput';
import ListOutput from './components/ListOutput';
import Header from './components/Header';

const STORAGE_KEY = 'WK4_LIST_ITEMS';

interface Item {
  id: string;
  name: string;
  crossed?: boolean;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) setItems(JSON.parse(json));
      } catch (e) {
        // handle error
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (input.trim()) {
      setItems(prev => [
        ...prev,
        { id: Date.now().toString(), name: input.trim() },
      ]);
      setInput('');
    }
  };

  const toggleCrossed = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, crossed: !item.crossed } : item
      )
    );
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <ListGiveInput input={input} setInput={setInput} addItem={addItem} />
        <ListOutput items={items} toggleCrossed={toggleCrossed} />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    minHeight: 48,
  },
});