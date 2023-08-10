import React from 'react';
import { useGlobalContext } from '../../../2_context/GlobalContext';

const BurgerMenu = () => {
  const { isNavHeaderOpen, toggleNavHeader } = useGlobalContext();
  const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-primary-light dark:bg-primary-dark transition ease transform duration-300`;

  return (
    <button
      className="h-12 w-8 bg-none cursor-pointer pointer-events-auto md:hidden"
      aria-label={`${
        isNavHeaderOpen
          ? 'close the navigation menu'
          : 'open the navigation menu'
      } `}
      alt="burger menu"
      onClick={() => toggleNavHeader()}
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div
          className={`${genericHamburgerLine} ${
            isNavHeaderOpen ? 'rotate-45 translate-y-3 ' : ''
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isNavHeaderOpen ? 'opacity-0' : ' group-hover:opacity-100'
          }`}
        />

        <div
          className={`${genericHamburgerLine} ${
            isNavHeaderOpen ? '-rotate-45 -translate-y-3 ' : ''
          }`}
        />
      </div>
    </button>
  );
};
export default BurgerMenu;
