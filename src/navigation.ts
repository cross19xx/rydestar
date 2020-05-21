import { StackNavigationProp } from '@react-navigation/stack';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type AuthRoute = keyof AuthStackParamList;

export type AuthNavigationProp<T extends AuthRoute> = StackNavigationProp<AuthStackParamList, T>;
