import React from 'react';
import {HStack, Spinner} from 'native-base';
import {colors} from '../../config/colors';
import {StyleSheet} from 'react-native';

const Loader = () => {
  const {primary} = colors;

  return (
    <HStack justifyContent="center" style={styles.container}>
      <Spinner size="lg" color={primary.teal} />
    </HStack>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
