import React from 'react';
import {
   View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
   } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';

// import Icon from './Icon';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function renderItem({ item }){
    return(
      <TouchableOpacity
            style={styles.memoListItem}
            onPress={() => { navigation.navigate('MemoDetail'); }}
          >
            <View>
              <Text sytle={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
              <Text sytle={styles.memoListItemDate}>{String(item.updateAt)}</Text>
            </View>
            <TouchableOpacity
              style={styles.memoDelete}
              onPress={() => { Alert.alert('Are you sure?'); }}
            >
              <AntDesign name="close" size={24} color="#B0B0B0" />
            </TouchableOpacity>
          </TouchableOpacity>
    )
  }
  return (
    <View styles={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.peopTypes = {
  memos:arrayOf(shape({
    id: string,
    bodyText: string,
    updateAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
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
