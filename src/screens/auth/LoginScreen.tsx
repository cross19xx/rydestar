import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import { AuthNavigationProp } from '../../navigation';
import Colors from '../../utils/colors';
import globalStyles from '../../utils/styles';

interface LoginScreenProps {
  navigation: AuthNavigationProp<'Login'>;
}

export default function Login(props: LoginScreenProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setLoader] = React.useState(false);

  const loginHeaderText = 'Login to your\naccount';

  const handleAuth = () => {
    setLoader(true);
    // TODO: Make the API call
  };

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Text style={[globalStyles.headerH1, styles.header]}>{loginHeaderText}</Text>

        <TextInput
          autoFocus
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

        <TouchableOpacity
          activeOpacity={1.0}
          style={styles.forgotPassword}
          onPress={() => props.navigation.push('ForgotPassword')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <Button type="primary" title="Login" onPress={handleAuth} isLoading={isLoading} />
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
  forgotPassword: {
    marginBottom: 24,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});
