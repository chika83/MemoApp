import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
            <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
            <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text sytle={styles.memoListItemTitle}>買い物リスト</Text>
            <Text sytle={styles.memoListItemDate}>2022/12/12</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    margin: 8,
    fontSize: 24,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
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
  circleButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
