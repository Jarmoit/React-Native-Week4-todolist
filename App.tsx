import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Pressable } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = 'WK4_LIST_ITEMS';
import ListInput from './components/ListInput';
import Header from './components/Header';


interface Item {
  id: string;
  name: string;
  crossed?: boolean;
}

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState<string>('');

  const toggleCrossed = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, crossed: !item.crossed } : item
      )
    );
  };

// Load items from AsyncStorage on mount
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
  }
    
//Listinput komponetoitu
  
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <ListInput input={input} setInput={setInput} addItem={addItem} />
        <FlatList     
          data={items}
          style={styles.list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
    <Pressable onPress={() => toggleCrossed(item.id)}>
      <Text
        style={{
          textDecorationLine: item.crossed ? "line-through" : "none",
        }}
      >
        {item.name}
      </Text>
    </Pressable>
  )}
/>

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
  header: {
    fontSize: 30,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 0,          
    elevation: 0,
    color: '#000',
  },
  list: {
    width: '90%',
    fontSize: 50,
    alignContent: 'center',
  },
  button: {
    fontSize: 20,
    color: '#5757ff', 
  },
});


