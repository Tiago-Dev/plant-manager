import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  }
})`
 background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
  padding-left: 30px;
  padding-right: 30px;
`;

export const Controller = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const PlantName = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  margin-top: 10px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.complement};
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const DateTimePickerText = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 24px;
`;