import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Colors from '../utils/colors';

interface ButtonProps {
  onPress: TouchableOpacityProps['onPress'];
  title: string;
  isLoading?: boolean;
  type: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
  const buttonStyle = [];
  buttonStyle.push(props.type === 'primary' ? styles.primaryButton : styles.secondaryButton);
  buttonStyle.push(props.style ? props.style : {});

  const textStyle = props.type === 'primary' ? styles.textPrimary : styles.textSecondary;

  const activityIndicatorColor = props.type === 'primary' ? Colors.WHITE : Colors.TEXT_PRIMARY;

  const handlePress = (event: GestureResponderEvent) => {
    if (!props.isLoading && props.onPress) {
      props.onPress(event);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={handlePress}
      style={[styles.button, ...buttonStyle]}>
      {props.isLoading && (
        <ActivityIndicator color={activityIndicatorColor} accessibilityHint="Loader" />
      )}

      {!props.isLoading && <Text style={[styles.text, textStyle]}>{props.title}</Text>}
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
