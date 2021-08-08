import React from 'react';
import {View, StyleSheet} from 'react-native';

import TinderCard from './src/components/TinderCard';
import users from './src/assets/data/users';
import AnimatedStack from './src/components/AnimatedStack';

const App = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe Right', user.name);
  };

  return (
    <View style={styles.container}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <TinderCard user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
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
