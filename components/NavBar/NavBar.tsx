import Link from 'next/link';
import React from 'react';
import {Button} from '../Button/Button';
import {StyledNavBar} from './NavBar.styled';
import Logo from './vamsa.svg';
import {IoLanguageSharp} from 'react-icons/io5';
import {MdArrowDropDown} from 'react-icons/md';
import {usePathname} from 'next/navigation';

const routes = {
  Home: '/',
  Articles: '/articles',
  'All Events': '/events',
  Gallery: '/gallery',
};

export const NavBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <StyledNavBar>
      <ul>
        <li className="logo">
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>
        </li>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key} className={pathname === value ? 'link active' : 'link'}>
            <Link href={value}>{key}</Link>
          </li>
        ))}
        <li className="button">
          <Button href="/join">Join Us</Button>
        </li>
        <li className="language">
          <div>
            <IoLanguageSharp />
            English
            <MdArrowDropDown />
          </div>
        </li>
      </ul>
    </StyledNavBar>
  );
};
