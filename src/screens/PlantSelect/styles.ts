import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 17px;
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  line-height: 20px;
`;

export const EnvironmentList = styled.FlatList.attrs({
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 20,
    marginVertical: 20
  }
})``;

export const Plants = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
`;

export const Indicator = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.green};
`;
