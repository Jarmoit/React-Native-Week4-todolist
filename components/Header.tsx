import React from 'react'
import { Provider as PaperProvider, Appbar, TextInput } from 'react-native-paper';

import { StyleSheet, Text } from 'react-native';

type Props = {}

export default function Header({}: Props) {
  return (
    
        <Appbar.Header>
          <Appbar.Content title="wk teht 4" />
          <Text style={styles.header}>Todo list</Text>
        </Appbar.Header>
  )
}
const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: '#000',
    
  },
});