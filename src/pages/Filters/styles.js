import styled from 'styled-components/native';

const FiltersContainer = styled.View`
  flex: 1;
  background-color: #f9fcff;
  align-items: center;
`;

FiltersContainer.Title = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: ${({ theme }) => theme.ubuntuBold};
`;

FiltersContainer.Option = styled.TouchableOpacity`
  min-width: 100%;
  padding: 16px;
`;

FiltersContainer.Text = styled.Text`
  font-size: 16px;
`;

FiltersContainer.Separator = styled.View`
  background-color: #afefff;
  opacity: 0.6;
  min-height: 2px;
  flex: 1;
`;

export default FiltersContainer;
