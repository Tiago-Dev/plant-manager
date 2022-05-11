import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
`;
