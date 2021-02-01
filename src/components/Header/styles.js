import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  height: 140px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 45px 40px;
  background: ${({ theme }) => theme.colors.background};
`;
