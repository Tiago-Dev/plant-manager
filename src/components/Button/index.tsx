import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <S.Container onPress={onPress}>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  )
};
