import React from 'react';

import CircleButtonContainer from './styles';

const CircleButton = ({
  hasNotification,
  onPress,
  children,
  notificationElement,
}) => (
  <CircleButtonContainer onPress={onPress}>
    {hasNotification && (
      <CircleButtonContainer.Notification>
        <CircleButtonContainer.NotificationNumber>
          {notificationElement}
        </CircleButtonContainer.NotificationNumber>
      </CircleButtonContainer.Notification>
    )}
    {children}
  </CircleButtonContainer>
);

export default CircleButton;
