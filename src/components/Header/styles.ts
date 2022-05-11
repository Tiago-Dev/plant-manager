import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
`;

export const userName = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  line-height: 40px;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

