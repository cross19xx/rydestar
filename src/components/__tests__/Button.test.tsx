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

  test('does not fire the onpress button when the activity is loading', () => {
    const onPress = jest.fn();
    const text = 'Click me';

    const { getByA11yHint } = render(
      <Button onPress={onPress} title={text} type="primary" isLoading />,
    );

    const indicator = getByA11yHint('Loader');
    fireEvent.press(indicator);

    expect(onPress).not.toHaveBeenCalled();
  });

  test('renders different styles between primary and secondary', () => {
    const onPress = jest.fn();
    const title = 'Random title';
    expect(
      snapshotDiff(
        <Button onPress={onPress} title={title} type="primary" />,
        <Button onPress={onPress} title={title} type="secondary" />,
      ),
    ).toMatchSnapshot();
  });

  test('renders activity indicator when provided', () => {
    const onPress = jest.fn();
    const title = 'Random title';
    const type = 'primary';

    expect(
      snapshotDiff(
        <Button onPress={onPress} title={title} type={type} isLoading />,
        <Button onPress={onPress} title={title} type={type} />,
      ),
    ).toMatchSnapshot();
  });
});
