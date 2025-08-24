'use client';
import Image from 'next/image';
import {Button} from '../Button/Button';
import {EventDetails, StyledEventCard} from './EventCard.styled';

interface EventCardProps {
  name?: string;
  url?: string;
  imageSrc?: string;
  description?: string;
}

export const EventCard = ({
  name,
  url,
  imageSrc,
  description,
}: EventCardProps) => {
  if (!name || !url) return null;
  return (
    <StyledEventCard>
      {imageSrc ? (
        <Image src={imageSrc} alt={name} width={350} height={240} />
      ) : null}
      <EventDetails>
        <h3>{name}</h3>
        <p>{description}</p>
        <Button href={url}>Book a spot</Button>
      </EventDetails>
    </StyledEventCard>
  );
};
