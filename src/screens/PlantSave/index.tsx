import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';

import waterdrop from '@assets/waterdrop.png';
import { PlantProps, savePlant } from '../../libs/storage';
import { Button } from '@components/Button';
import * as S from './styles';

interface Params {
  plant: PlantProps
};

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime)
      setSelectedDateTime(dateTime);
  };

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  };

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito Obrigado :D',
        icon: 'hug',
        nextScreen: 'MyPlants',
      });

    } catch {
      Alert.alert('Não foi possível salvar. 😪');
    }
  };

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <S.Content>
        <S.PlantInfo>
          <SvgFromUri uri={plant.photo} width={150} height={150} />
          <S.PlantName>{plant.name}</S.PlantName>
          <S.PlantAbout>{plant.about}</S.PlantAbout>
        </S.PlantInfo>

        <S.Controller>
          <S.TipContainer>
            <S.TipImage source={waterdrop} />
            <S.TipText>{plant.water_tips}</S.TipText>
          </S.TipContainer>

          <S.AlertLabel>
            Escolha o melhor horário para ser lembrado:
          </S.AlertLabel>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              is24Hour={true}
              onChange={handleChangeTime}
            />
          )}

          {
            Platform.OS === 'android' && (
              <S.DateTimePickerButton onPress={handleOpenDatetimePickerForAndroid}>
                <S.DateTimePickerText>{`Mudar ${format(selectedDateTime, 'HH:mm')}`}</S.DateTimePickerText>
              </S.DateTimePickerButton>
            )
          }
          <View style={{ paddingBottom: 10 }}>
            <Button
              title="Cadastrar planta"
              onPress={handleSave}
            />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Button
              title="Voltar"
              onPress={() => navigation.goBack()}
            />
          </View>
        </S.Controller>
      </S.Content>
    </S.Container>
  )
}
