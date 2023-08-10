import React, { useEffect } from 'react';

import { ReactComponent as SquaregLogoLight } from '../../../1_assets/images/logos/logo_squareG_light.svg';
import { ReactComponent as SquaregLogoDark } from '../../../1_assets/images/logos/logo_squareG_dark.svg';
import { useGlobalContext } from '../../../2_context/GlobalContext';
import BurgerMenu from './BurgerMenu';
import NavHeader from './NavHeader';

const Header = ({ isSidebarInHero }) => {
  const { dark, isNavHeaderOpen, closeNavHeader } = useGlobalContext();

  const handleScroll = (event) => {
    // change isPageScrollOnTop state depending on scroll

    // if page is scrolled, close navHeader with no delay
    closeNavHeader(150);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={` top-0 z-30 w-full header md:hidden ${
        isSidebarInHero ? 'absolute' : 'fixed top-0'
      }`}
      role="presentation"
    >
      <div
        className={`absolute top-0 right-0 w-full h-full header__insideOverlay ${
          isNavHeaderOpen || 'shadow-lg dark:shadow dark:shadow-primary-dark'
        }
      `}
      ></div>
      <div
        className="px-5 sm:px-[3vh]  h-full flex flex-row justify-between items-center
        header__insideContent
       "
      >
        {dark ? (
          <SquaregLogoDark alt="logo version dark" className="h-12 logo" />
        ) : (
          <SquaregLogoLight alt="logo version light" className="h-12 logo" />
        )}
        <BurgerMenu />
      </div>
      <div className="h-0.5 w-full absolute bg-white bottom-0 gradientLine"></div>
      {/* NavHeader below Navbar for small devices only */}
      <NavHeader isPageScrollOnTop={false} />
    </header>
  );
};
export default Header;

// burger animation helper :
// https://konradstaniszewski.com/blog/tailwind-hamburger
