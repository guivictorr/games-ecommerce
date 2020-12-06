import React from 'react';

import { RoundedButtonContainer, RoundedButtonText } from './styles';

const RoundedButton = ({ text, action }) => {
  return (
    <RoundedButtonContainer onPress={action}>
      <RoundedButtonText>{text}</RoundedButtonText>
    </RoundedButtonContainer>
  );
};

export default RoundedButton;
