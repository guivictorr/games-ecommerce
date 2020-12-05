import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const FiltersContainer = styled.View`
  flex: 1;
  background-color: #f9fcff;
  align-items: center;
  margin-top: 35px;
`;

export const FilterListTitle = styled.Text`
  font-size: 36px;
  align-self: flex-start;
  margin-left: 15px;
  font-weight: bold;
  margin-top: 20px;
`;

export const FilterOption = styled(RectButton)`
  min-width: 100%;
  padding: 16px;
`;

export const FilterText = styled.Text`
  font-size: 16px;
`;

export const Separator = styled.View`
  background-color: #afefff;
  opacity: 0.6;
  min-height: 2px;
  flex: 1;
`;
