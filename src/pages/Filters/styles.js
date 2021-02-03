import styled from 'styled-components/native';

const FiltersContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

FiltersContainer.Option = styled.TouchableOpacity`
  min-width: 100%;
  padding: 16px;
`;

FiltersContainer.Text = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

FiltersContainer.Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 2px;
  flex: 1;
`;

export default FiltersContainer;
