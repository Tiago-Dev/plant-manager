import styled, { css } from 'styled-components/native';


interface EnvironmentButtonProps {
  active?: boolean;
};

export const Container = styled.TouchableOpacity <EnvironmentButtonProps>`
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-left: 5px;
  margin-right: 5px;

  ${(props) =>
    props.active
      ? css`
       background-color: ${({ theme }) => theme.colors.green_light};
        `
      : css`
        background-color: ${({ theme }) => theme.colors.shape};
        `}
`;

export const Title = styled.Text<EnvironmentButtonProps>`
  ${(props) =>
    props.active
      ? css`
        color: ${({ theme }) => theme.colors.green_dark};
        font-family: ${({ theme }) => theme.fonts.heading};
        `
      : css`
        color: ${({ theme }) => theme.colors.heading};
        font-family: ${({ theme }) => theme.fonts.text};
        `}
`;
