import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 22px;
  text-align: center;
  line-height: 38px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  text-align: center;
  font-size: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
`;
