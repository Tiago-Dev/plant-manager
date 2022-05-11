import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  max-width: 45%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 20px;
  margin: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.green_dark};
  font-family:  ${({ theme }) => theme.fonts.heading};
  margin-top: 16px;
  margin-bottom: 16px;
`;
