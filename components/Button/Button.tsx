import React from 'react';
import {StyledButton} from './Button.styled';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children, onClick, href}) => {
  const tag = href ? 'a' : 'button';
  return (
    <StyledButton as={tag} onClick={onClick} href={href ?? '#'}>
      {children}
    </StyledButton>
  );
};
