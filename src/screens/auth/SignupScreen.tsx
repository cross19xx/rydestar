import React from 'react';
import { StatusBar, StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../../components/Button';
import { AuthNavigationProp } from '../../navigation';
import Colors from '../../utils/colors';
import globalStyles from '../../utils/styles';

interface SignupScreenProps {
  navigation: AuthNavigationProp<'Signup'>;
}

export default function Signup(props: SignupScreenProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const headerText = 'Create your\naccount';

  const handleAuth = () => {
    // TODO: Handle authentication for signup here
  };

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={[globalStyles.headerH1, styles.header]}>{headerText}</Text>

        <TextInput
          autoFocus
          value={name}
          placeholder="Name"
          onChangeText={setName}
          style={[globalStyles.authInput]}
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          keyboardType="email-address"
          style={[globalStyles.authInput]}
        />

        <TextInput
          secureTextEntry
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          style={[globalStyles.authInput]}
        />

        <Button type="primary" title="Register" onPress={handleAuth} style={styles.signupButton} />

        <Button
          type="secondary"
          title="Login instead"
          onPress={() => props.navigation.replace('Login')}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 96,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: Colors.PAGE_BACKGROUND,
  },
  header: {
    marginBottom: 32,
  },
  signupButton: {
    marginBottom: 16,
  },
});
