import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import * as S from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <S.Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <S.Title>{data.name}</S.Title>
    </S.Container>
  )
}
