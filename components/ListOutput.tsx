import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, Pressable } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput } from 'react-native-paper';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = {}

export default function ListOutput({}: Props) {
    const [input, setInput] = useState<string>('');
  return (
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
  )
}