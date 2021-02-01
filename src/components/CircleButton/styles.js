import styled from 'styled-components/native';

const CircleButtonContainer = styled.TouchableOpacity`
  background-color: #afe2ff;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

CircleButtonContainer.Notification = styled.View`
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

CircleButtonContainer.NotificationNumber = styled.Text`
  color: #f5f5f5;
`;

export default CircleButtonContainer;
