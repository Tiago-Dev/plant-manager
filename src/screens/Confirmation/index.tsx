import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Button } from '@components/Button';
import * as S from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Emoji>
          {emojis[icon]}
        </S.Emoji>

        <S.Title>
          {title}
        </S.Title>

        <S.Subtitle>
          {subtitle}
        </S.Subtitle>

        <S.Footer>
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </S.Footer>
      </S.Content>
    </S.Container>
  )
};
