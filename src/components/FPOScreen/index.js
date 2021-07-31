import React from 'react';
import { View, Text } from 'react-native';

export default function FPOScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text style={{ color: 'white' }}>My Screen</Text>
    </View>
  );
}
