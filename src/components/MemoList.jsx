import React from 'react';
import {
   View, Text, StyleSheet, TouchableOpacity, Alert,
   } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <AntDesign name="close" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <AntDesign name="close" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <AntDesign name="close" size={24} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
