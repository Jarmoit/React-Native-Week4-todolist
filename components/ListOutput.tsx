import React from 'react';
import { StyleSheet, Text, FlatList, Pressable } from 'react-native';

interface Item {
  id: string;
  name: string;
  crossed?: boolean;
}

interface ListOutputProps {
  items: Item[];
  toggleCrossed: (id: string) => void;
}

export default function ListOutput({ items, toggleCrossed }: ListOutputProps) {
  return (
    <FlatList
      data={items}
      style={styles.list}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => toggleCrossed(item.id)}>
          <Text
            style={[
              styles.itemText,
              {textDecorationLine: item.crossed ? "line-through" : "none" }
            ]}
          >
            {item.name}
          </Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: '90%',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  itemText: {
    textAlign: 'left',
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
  },
});