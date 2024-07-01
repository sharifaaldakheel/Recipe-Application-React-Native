import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CustomDrawerLabel = ({ label, focused }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, focused && styles.focusedLabel]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
  focusedLabel: {
    fontWeight: 'bold',
    color: '#ff6347',
  },
});

export default CustomDrawerLabel;
