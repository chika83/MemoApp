import React from 'react';
import {
   View, Text, StyleSheet, TouchableOpacity,
   } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="close" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="close" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
          <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="close" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
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
  circleButton: {
    backgroundColor: 'blue',
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
