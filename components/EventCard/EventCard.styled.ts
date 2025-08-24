import styled from 'styled-components';
import {StyledButton} from '../Button/Button.styled';

export const StyledEventCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  background-color: ${({theme}) => theme.colors.background2};
  border-radius: 0.625em;
  overflow: hidden;

  img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
  }
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;

  h3 {
    margin: 0;
  }

  ${StyledButton} {
    width: fit-content;
    align-self: flex-end;
  }
`;
