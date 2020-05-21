import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Hello world</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}
