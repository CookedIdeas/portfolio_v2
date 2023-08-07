import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { ReactComponent as GatsbyLogo } from '../../1_assets/images/logos_stacks/gatsby_logo.svg';
import { ReactComponent as TailwindLogo } from '../../1_assets/images/logos_stacks/tailwind_logo.svg';
import { ReactComponent as HeartLogo } from '../../1_assets/images/logos_stacks/heart_logo.svg';
import { ReactComponent as SquaregLogoLight } from '../../1_assets/images/logos/logo_squareG_light.svg';
import { ReactComponent as SquaregLogoDark } from '../../1_assets/images/logos/logo_squareG_dark.svg';

const Footer = () => {
  const { dark } = useGlobalContext();
  return (
    <footer
      className="nav-z-index bg-secondaryBackground-light dark:bg-secondaryBackground-dark
    h-40 w-full flex flex-col items-center gap-1.5 justify-center pt-5"
    >
      <p className="text-center">
        Made with{' '}
        {
          <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">
            <GatsbyLogo
              alt="gatsby js logo"
              className="h-4 inline -translate-y-[3px]"
            />{' '}
            Gatsby
          </a>
        }
        ,{' '}
        {
          <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
            <TailwindLogo
              alt="tailwind css logo"
              className="h-5 inline -translate-y-[2px]"
            />{' '}
            Tailwind
          </a>
        }{' '}
        and{' '}
        <HeartLogo
          alt="small heart"
          className="h-5 inline translate-y-[2px] "
        />{' '}
        passion
      </p>
      <p>&#169; {new Date().getFullYear()} Gabriel G.</p>
      {dark ? (
        <SquaregLogoDark alt="logo version dark" className="h-8" />
      ) : (
        <SquaregLogoLight alt="logo version light" className="h-8" />
      )}
    </footer>
  );
};
export default Footer;
