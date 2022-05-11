import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import { Button } from '@components/Button';
import * as S from './styles';

export function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name)
      return Alert.alert('Me diz como chamar você 😪');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das duas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possível gravar o seu nome. 😪');
    }
  };

  return (
    <S.Container>
      <S.Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.FormContainer>
            <S.Form>
              <S.Header>
                <S.Emoji>
                  {isFilled ? '😁' : '😀'}
                </S.Emoji>

                <S.Title>
                  Como podemos {'\n'}
                  chamar você?
                </S.Title>
              </S.Header>

              <S.Input
                isFocused={isFocused}
                isFilled={isFilled}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <S.Footer>
                <Button title={'Confirmar'} onPress={handleSubmit} />
              </S.Footer>
            </S.Form>
          </S.FormContainer>
        </TouchableWithoutFeedback>
      </S.Content>
    </S.Container>
  )
};
