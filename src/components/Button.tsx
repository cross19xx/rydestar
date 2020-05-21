import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { Colors } from '../constants';

interface ButtonProps {
  onPress: TouchableOpacityProps['onPress'];
  title: string;
  type: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
  const buttonStyle = [];
  buttonStyle.push(props.type === 'primary' ? styles.primaryButton : styles.secondaryButton);
  buttonStyle.push(props.style ? props.style : {});

  const textStyle = props.type === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={props.onPress}
      style={[styles.button, ...buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 18,
    borderRadius: 8,
  },
  primaryButton: {
    backgroundColor: Colors.PRIMARY,
  },
  secondaryButton: {
    backgroundColor: Colors.ACCENT,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  textPrimary: {
    color: Colors.WHITE,
  },
  textSecondary: {
    color: Colors.TEXT_PRIMARY,
  },
});
