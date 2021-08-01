import React from 'react';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

const Button = styled.TouchableOpacity`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 50px;
  width: 50px;
  background-color: grey;
`;

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        position: 'relative',
      }}
    >
      <Button onPress={navigation.openDrawer} />
      <Text style={{ color: 'white' }}>Home</Text>
    </View>
  );
}
