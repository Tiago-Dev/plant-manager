import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 50px
  background-color: ${({ theme }) => theme.colors.background};
  padding-left: 30px;
  padding-right: 30px;
`;

export const Spotlight = styled.View`
  background-color: ${({ theme }) => theme.colors.blue_light};
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.blue};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 20px;
  margin-bottom: 20px;
`;
