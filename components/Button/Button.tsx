import React from 'react';
import {StyledButton} from './Button.styled';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  target?: '_blank' | '_self';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  target = '_self',
}) => {
  const tag = href ? 'a' : 'button';
  return (
    <StyledButton as={tag} onClick={onClick} href={href ?? '#'} target={target}>
      {children}
    </StyledButton>
  );
};
