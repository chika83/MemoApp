import React from 'react';
import {
   View, TextInput, StyleSheet,
   } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeybordSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.inputContainer}>
          <TextInput value="create" multiline style={styles.input} />
        </View>
        <CircleButton name="check" />
      </View>
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});