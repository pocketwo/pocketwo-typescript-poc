import React from 'react';
import {StyleSheet} from 'react-native';
import {ButtonView, ButtonText} from './Styles';

interface Props {
  text: string;
  onPress: any;
  side: string;
  clicked: boolean;
}

const SingleButton: React.FC<Props> = ({
  text,
  onPress,
  side,
  clicked,
}: Props) => {
  const sideStyle = side === 'left' ? styles.left : styles.right;

  const clickedStyle = clicked ? styles.clicked : null;

  return (
    <ButtonView onPress={onPress} style={[sideStyle, clickedStyle]}>
      <ButtonText>{text}</ButtonText>
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  left: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 1,
    borderColor: 'white',
  },
  right: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderLeftWidth: 1,
    borderColor: 'white',
  },
  clicked: {
    backgroundColor: 'yellow',
  },
});

export default SingleButton;
