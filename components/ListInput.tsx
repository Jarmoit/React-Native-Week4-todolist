import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper'; 

interface ListInputProps {
  input: string;
  setInput: (text: string) => void;
  addItem: () => void;
}
interface Item {
  id: string;
  name: string;
  crossed?: boolean;
}


export default function ListInput({ input, setInput, addItem }: ListInputProps) {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter task"
        placeholderTextColor="#888" 
        underlineColor="transparent"
      />
      <Pressable onPress={addItem}>
        <Text style={styles.button}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
  button: {
    fontSize: 20,
    color: '#5757ff',
  },
});