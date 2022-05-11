import React from 'react';
import * as S from './styles';

interface EnvironmentButtonProps {
  title?: string;
  active?: boolean;
  onPress: () => void;
}

export function EnvironmentButton({
  title,
  active = false,
  onPress
}: EnvironmentButtonProps) {
  return (
    <S.Container
      active={active}
      onPress={onPress}
    >
      <S.Title active={active}>
        {title}
      </S.Title>
    </S.Container>
  )
}