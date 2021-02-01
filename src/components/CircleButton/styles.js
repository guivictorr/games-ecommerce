import styled from 'styled-components/native';

const CircleButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 52px;
  height: 52px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

CircleButtonContainer.Notification = styled.View`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.error};
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

CircleButtonContainer.NotificationNumber = styled.Text`
  color: ${({ theme }) => theme.colors.contrastText};
`;

export default CircleButtonContainer;
