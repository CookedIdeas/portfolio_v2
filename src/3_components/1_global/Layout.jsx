import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import Footer from '../2_layouts/Footer';

const Layout = ({ children }) => {
  const { dark } = useGlobalContext();

  return (
    <div
      // className={`${
      //   dark ? ' bg-red ' : 'bg-red'
      // } relative min-h-screen h-full flex flex-col items-center`}
      className="bg-background-light dark:bg-background-dark"
    >
      {/* <Navbar /> */}

      {children}

      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
