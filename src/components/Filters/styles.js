import styled from 'styled-components/native';

const Filters = styled.View`
  position: absolute;
  bottom: 0;
  background-color: #1a1a1a;
`;

Filters.Header = styled.View`
  background-color: #1a1a1a;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

Filters.Option = styled.TouchableOpacity`
  min-width: 100%;
  padding: 16px;
`;

Filters.Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

Filters.Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 2px;
  flex: 1;
`;

export default Filters;
