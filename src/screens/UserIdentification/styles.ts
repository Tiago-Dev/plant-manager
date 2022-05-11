import styled, { css } from 'styled-components/native';

interface InputProps {
  isFocused?: boolean;
  isFilled?: boolean;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 54px;
  padding-right: 54px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  color: ${({ theme }) => theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
                  
  ${(props) =>
    props.isFocused || props.isFilled
      ? css`
        border-color: ${({ theme }) => theme.colors.green};
        `
      : css`
        border-color: ${({ theme }) => theme.colors.gray};
        `}

`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-top: 20px;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;