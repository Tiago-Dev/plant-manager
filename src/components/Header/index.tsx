import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userImg from '@assets/profile.jpg';
import * as S from './styles';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return (
    <S.Container>
      <View>
        <S.Greeting>Olá,</S.Greeting>
        <S.userName>{userName}</S.userName>
      </View>
      <S.Image source={userImg} />
    </S.Container>
  )
};
