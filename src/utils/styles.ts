import { StyleSheet } from 'react-native';
import Colors from './colors';

const globalStyles = StyleSheet.create({
  /** Used for the TextInput boxes used at the authentication screens */
  authInput: {
    borderColor: Colors.DIVIDER,
    borderWidth: 1,
    width: '100%',
    backgroundColor: Colors.WHITE,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 16,
  },

  headerH1: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
});
export default globalStyles;
