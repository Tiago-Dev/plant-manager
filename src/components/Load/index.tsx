import React from 'react';
import * as S from './styles';

import loadAnimation from '@assets/load.json';

export function Load() {
  return (
    <S.Container>
      <S.Animation
        source={loadAnimation}
        autoPlay
        loop
      />
    </S.Container>
  )
}
