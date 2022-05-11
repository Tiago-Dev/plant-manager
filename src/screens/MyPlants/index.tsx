import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';

import waterdrop from '@assets/waterdrop.png';
import { Header } from '@components/Header';
import { Load } from '@components/Load';
import { PlantCardSecondary } from '@components/PlantCardSecondary';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import * as S from './styles';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStoragedData() {
      let plantStoraged = await loadPlant();

      if (plantStoraged.length > 0) {
        const nextTime = formatDistance(
          new Date(plantStoraged[0].dateTimeNotification).getTime(),
          new Date().getTime(),
          { locale: pt }
        );


        setNextWatered(
          `Não esqueça de regar a ${plantStoraged[0].name} à ${nextTime} horas.`
        )
      } else {
        plantStoraged = [];
      }

      setMyPlants(plantStoraged);
      setLoading(false);
    }

    loadStoragedData();
  }, []);

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 😥',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert('Não foi possível remover! 😥');
          }
        }
      }
    ])
  };

  function existsPlants() {
    return myPlants.length > 0
  };

  if (loading)
    return <Load />

  return (
    <S.Container>
      <Header />
      {existsPlants() ? (
        <>
          <S.Spotlight>
            <S.SpotlightImage source={waterdrop} />
            <S.SpotlightText>{nextWatered}</S.SpotlightText>
          </S.Spotlight>


          <S.Plants>
            <S.PlantsTitle>Próximas regadas</S.PlantsTitle>

            <FlatList
              data={myPlants}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PlantCardSecondary
                  data={item}
                  handleRemove={() => { handleRemove(item) }}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flex: 1 }}
            />
          </S.Plants>
        </>
      ) : (
        <S.Spotlight>
          <S.SpotlightImage source={waterdrop} />
          <S.SpotlightText>
            Você ainda não possui uma planta cadastrada.
          </S.SpotlightText>
        </S.Spotlight>
      )}

    </S.Container>
  )
}
