import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: #f9fcff;
  align-items: center;
`;

export const CartButton = styled.TouchableOpacity`
  background-color: #afe2ff;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

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
  z-index: 1;
`;

export const NotificationNumber = styled.Text`
  color: #f5f5f5;
`;
