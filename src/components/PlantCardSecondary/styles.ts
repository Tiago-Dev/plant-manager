import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  width: 100%;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 17px;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  color: ${({ theme }) => theme.colors.body_light};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.body_dark};
  margin-top: 5px;
  font-size: 16px
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const ButtonRemove = styled.TouchableOpacity`
  width: 100px;
  height: 85px;
  background-color: ${({ theme }) => theme.colors.red};
  justify-content: center;
  align-items: center;
  position: relative;
  right: 20px;
  border-radius: 20px;
  margin-top: 15px;
  padding-left: 15px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
`;