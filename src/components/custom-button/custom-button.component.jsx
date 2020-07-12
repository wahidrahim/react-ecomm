import React from 'react';

import { Button } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button className="custom-button" {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
