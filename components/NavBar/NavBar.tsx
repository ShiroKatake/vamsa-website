import Link from 'next/link';
import React from 'react';
import {Button} from '../Button/Button';
import {
  StyledLanguageSelection,
  StyledLink,
  StyledNavBar,
} from './NavBar.styled';
import Logo from './vamsa.svg';
import {IoLanguageSharp} from 'react-icons/io5';
import {MdArrowDropDown} from 'react-icons/md';
import {usePathname} from 'next/navigation';

const routes = {
  Home: '/',
  News: '/news',
  'All Events': '/events',
  Gallery: '/gallery',
};

export const NavBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <StyledNavBar>
      <ul>
        <li className="logo" aria-hidden>
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>
        </li>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <StyledLink
              href={value}
              className={pathname === value ? 'link active' : 'link'}
            >
              {key}
            </StyledLink>
          </li>
        ))}
        <li className="button">
          <Button href="/join">Join Us</Button>
        </li>
        <StyledLanguageSelection>
          <IoLanguageSharp />
          English
          <MdArrowDropDown />
        </StyledLanguageSelection>
      </ul>
    </StyledNavBar>
  );
};
