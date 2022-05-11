import React from 'react';
import { useNavigation } from '@react-navigation/core';

import wateringImg from '@assets/watering.png';
import * as S from './styles';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </S.Title>

        <S.Image source={wateringImg} resizeMode="contain" />

        <S.Subtitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </S.Subtitle>

        <S.Button
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <S.ButtonIcon
            name="chevron-right"
          />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
}
