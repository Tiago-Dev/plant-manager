import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  text-align: center;
  margin-top: 38px;
  line-height: 34px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 18px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
`;

export const ButtonIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
`;
