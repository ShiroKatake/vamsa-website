import React from 'react';
import {StyledButton} from './Button.styled';

interface ButtonProps {
  url?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, onClick, url}) => {
  const tag = url ? 'a' : 'button';
  return (
    <StyledButton as={tag} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
