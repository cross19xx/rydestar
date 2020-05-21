import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthNavigationProp } from '../../navigation';

interface ForgotPasswordScreenProps {
  navigation: AuthNavigationProp<'ForgotPassword'>;
}

export default function ForgotPassword(props: ForgotPasswordScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Forgot password</Text>

      <Button title="Click to go back" onPress={() => props.navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 96,
    paddingHorizontal: 16,
  },
});
