import React from 'react';

import RoundedButtonContainer from './styles';

const RoundedButton = ({ text, action }) => (
  <RoundedButtonContainer onPress={action}>
    <RoundedButtonContainer.Title>{text}</RoundedButtonContainer.Title>
  </RoundedButtonContainer>
);

export default RoundedButton;
