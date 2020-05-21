import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../../components/Button';
import { AuthRoute, AuthNavigationProp } from '../../navigation';
import Colors from '../../utils/colors';

export interface WelcomeScreenProps {
  navigation: AuthNavigationProp<'Welcome'>;
}

export default function WelcomeScreen(props: WelcomeScreenProps) {
  const routeToPage = (route: AuthRoute) => {
    props.navigation.push(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          type="primary"
          style={styles.loginButton}
          onPress={() => routeToPage('Login')}
        />

        <Button type="secondary" title="Create an account" onPress={() => routeToPage('Signup')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 6,
    backgroundColor: Colors.PRIMARY_DARK,
  },
  buttonContainer: {
    flex: 4,
    paddingBottom: 64,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginButton: {
    marginBottom: 16,
  },
});
