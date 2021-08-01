import React from 'react';
import {View, StyleSheet} from 'react-native';

import TinderCard from './src/components/TinderCard';
import users from './assets/data/users';

const App = () => {
  return (
    <View style={styles.container}>
      <TinderCard user={users[1]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default App;
