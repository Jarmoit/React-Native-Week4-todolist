import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

interface ListInputProps {
  input: string;
  setInput: (text: string) => void;
  addItem: () => void;
}

export default function ListGiveInput({ input, setInput, addItem }: ListInputProps) {
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
    marginVertical: 0,
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