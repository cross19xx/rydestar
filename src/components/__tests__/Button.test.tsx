import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';
import Button from '../Button';

describe('Component test: Button', () => {
  test('triggers the onPress event when the text is tapped', () => {
    const onPress = jest.fn();
    const text = 'Click me';
    const { getByText } = render(<Button onPress={onPress} title={text} type="primary" />);

    const textElem = getByText(text);
    fireEvent.press(textElem);

    expect(onPress).toHaveBeenCalled();
  });

  test('Renders different styles between primary and secondary', () => {
    const onPress = jest.fn();
    const title = 'Random title';
    expect(
      snapshotDiff(
        <Button onPress={onPress} title={title} type="primary" />,
        <Button onPress={onPress} title={title} type="secondary" />,
      ),
    ).toMatchSnapshot();
  });
});
