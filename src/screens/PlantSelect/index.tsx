import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { EnvironmentButton } from '@components/EnvironmentButton';
import { Header } from '@components/Header';
import { Load } from '@components/Load';
import { PlantCardPrimary } from '@components/PlantCardPrimary';
import { PlantProps } from '../../libs/storage';
import api from '../../services/api';
import * as S from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
};

export function PlantSelect() {
  const navigation = useNavigation();
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function fetchEnvironment() {
      try {
        const { data } = await api.get('plants_environments?_sort=title&_order=asc')
        setEnvironments([
          {
            key: 'all',
            title: 'Todos'
          },
          ...data
        ]);
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data)
      return setLoading(true);

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  };

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment)
    );

    setFilteredPlants(filtered);
  };

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  };

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant })
  };

  if (loading)
    return <Load />

  return (
    <S.Container>
      <S.Header>
        <Header />
        <S.Title>Em qual ambiente</S.Title>
        <S.Subtitle>você quer colocar sua planta?</S.Subtitle>
      </S.Header>

      <View>
        <S.EnvironmentList
          data={environments}
          keyExtractor={(item: any) => String(item.key)}
          renderItem={({ item }: any) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <S.Plants>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ?
              <S.Indicator /> :
              <></>
          }
        />
      </S.Plants>
    </S.Container>
  )
};
