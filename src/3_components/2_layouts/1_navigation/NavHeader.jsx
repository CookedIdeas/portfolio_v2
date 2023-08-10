import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useGlobalContext } from '../../../2_context/GlobalContext';
import ThemeSwitch from './ThemeSwitch';
import { navLinks } from '../../../1_assets/datas/navLinks';
import SocialLinks from './SocialLinks';
import GradientLine from '../../99_smallReusable/GradientLine';

const NavHeader = ({ isPageScrollOnTop = true }) => {
  const { dark, isNavHeaderOpen, closeNavHeader } = useGlobalContext();
  return (
    <nav
      // className={`fixed top-0`}
      className={`max-h-0 overflow-hidden transition-[max-height] duration-500 shadow-lg dark:shadow dark:shadow-primary-dark ${
        isPageScrollOnTop
          ? 'bg-secondaryBackground-light dark:bg-secondaryBackground-dark'
          : 'bg-secondaryBackground-light dark:bg-secondaryBackground-dark'
      } ${isNavHeaderOpen && 'max-h-96'} `}
    >
      <ul className="text-center flex flex-col gap-1.5 fluid-xl my-2">
        {navLinks.map((link) => {
          const { id, text_fr, text_eng, toAnchor } = link;
          return (
            <li
              key={id}
              className="uppercase text-primary-light dark:text-darkPurple"
            >
              <AnchorLink
                to={toAnchor}
                stripHash
                title={text_fr}
                onAnchorLinkClick={() => closeNavHeader(true)}
              />
            </li>
          );
        })}
        <li className="my-1 flex justify-center self-center w-1/2">
          <GradientLine />
        </li>
        <li className="m-1">
          <SocialLinks forSidebar={false} />
        </li>
        <li className="my-1 flex justify-center self-center w-1/2">
          <GradientLine />
        </li>
        <li className="mb-2 flex flex-col gap-2 items-center font-light text-base w-1/2 self-center">
          <span>Changer le thème</span>
          <div className="w-3/4 flex gap-4 items-start justify-center">
            <span className={`text-sm ${dark ? 'font-normal' : 'opacity-80'}`}>
              Dark
            </span>
            <div className="w-1/2">
              <ThemeSwitch forSidebar={false} />
            </div>
            <span className={`text-sm ${!dark ? 'font-normal' : 'opacity-70'}`}>
              Light
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default NavHeader;
