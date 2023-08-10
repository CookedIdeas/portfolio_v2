import React, { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { ReactComponent as SquaregLogoLight } from '../../../1_assets/images/logos/logo_squareG_light.svg';
import { ReactComponent as SquaregLogoDark } from '../../../1_assets/images/logos/logo_squareG_dark.svg';
import { useGlobalContext } from '../../../2_context/GlobalContext';
import { navLinks } from '../../../1_assets/datas/navLinks.js';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import GradientLine from '../../99_smallReusable/GradientLine';
import ThemeSwitch from './ThemeSwitch';

const Sidebar = ({ isSidebarInHero, isSidebarInFooter }) => {
  const { dark } = useGlobalContext();

  return (
    <nav
      className={`${
        isSidebarInHero
          ? 'absolute'
          : isSidebarInFooter
          ? 'absolute bottom-0'
          : 'fixed top-0'
      }  left-0 w-1/4 h-screen bg-tertiaryBackground-light dark:bg-tertiaryBackground-dark homePageContent__sideBar
      flex flex-col items-center justify-between
      py-4
      `}
    >
      <div className="h-16 w-full flex justify-center">
        {dark ? (
          <SquaregLogoDark alt="logo version dark" className="h-full" />
        ) : (
          <SquaregLogoLight alt="logo version light" className="h-full" />
        )}
      </div>
      <ul className="text-center text-base font-light capitalize flex flex-col gap-2">
        {navLinks.map((link) => {
          const { id, text_fr, toAnchor } = link;
          return (
            <li key={id}>
              <AnchorLink to={toAnchor} stripHash title={text_fr} />
            </li>
          );
        })}
        <li>
          <GradientLine />
        </li>
        <li>
          <Link
            to="/"
            className="pointer-events-none cursor-default opacity-50"
          >
            blog
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-4 items-center">
        <div>
          <SocialLinks forSidebar={true} />
        </div>
        <GradientLine />
        <div className="flex flex-col gap-2 items-center font-light text-xs">
          <span>Changer le thème</span>
          <div className="w-3/4 flex gap-2 items-start justify-center">
            <span className={`${dark ? 'font-normal' : 'opacity-80'}`}>
              Dark
            </span>
            <div className="w-1/2">
              <ThemeSwitch forSidebar={true} />
            </div>
            <span className={`${!dark ? 'font-normal' : 'opacity-70'}`}>
              Light
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
