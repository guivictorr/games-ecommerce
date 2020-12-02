import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #f9fcff;
`;

export const Header = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #edf8ff;
  margin-top: 30px;
  padding: 0 25px;
`;

export const FilterButton = styled.TouchableOpacity`
  background-color: rgba(194, 233, 255, 0.45);
  width: 52px;
  height: 52px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const CartButton = styled(FilterButton)``;

export const CartImage = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Notification = styled.View`
  border-radius: 50px;
  background-color: #ff5757;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`;

export const NotificationNumber = styled.Text`
  color: #f5f5f5;
`;
