import React from 'react';
import {View, StyleSheet} from 'react-native';

import TinderCard from './src/components/TinderCard';

const App = () => {
  return (
    <View style={styles.container}>
      <TinderCard />
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
