import React from 'react';
import { Animated, View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';

import * as S from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
};

export const PlantCardSecondary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <S.ButtonRemove onPress={handleRemove}>
              <S.Icon name="trash" size={32} />
            </S.ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
      <S.Container {...rest}>
        <SvgFromUri
          uri={data.photo}
          width={50}
          height={50}
        />
        <S.Title>{data.name}</S.Title>
        <S.Details>
          <S.TimeLabel>Regar às</S.TimeLabel>
          <S.Time>{data.hour}</S.Time>
        </S.Details>
      </S.Container>
    </Swipeable>
  )
}
