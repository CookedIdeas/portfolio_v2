import * as React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../2_context/GlobalContext';
import Layout from '../3_components/1_global/Layout';
import Seo from '../3_components/1_global/Seo';
import Hero from '../3_components/3_homepage/Hero';
import Introduction from '../3_components/3_homepage/Introduction';
import Sidebar from '../3_components/2_layouts/1_navigation/Sidebar';
import References from '../3_components/3_homepage/References';
import Footer from '../3_components/2_layouts/Footer';

const IndexPage = () => {
  const { dark, closeNavHeader } = useGlobalContext();

  useEffect(() => {
    const handleClick = (event) => {
      closeNavHeader(false);
    };
    document
      .getElementById('index_content')
      .addEventListener('click', handleClick);
    return () => {
      document
        .getElementById('index_content')
        .removeEventListener('click', handleClick);
    };
  });
  //
  return (
    <div
      className={`${dark ? 'dark' : ''} bg-background-light
        dark:bg-background-dark`}
    >
      <Hero />

      <div id="index_content" className="relative">
        <Sidebar />
        <main
          className="min-h-screen
        flex flex-col gap-8
        max-w-[1240px]
        overflow-x-hidden
        homePageContent__main
        bg-background-light
        dark:bg-background-dark"
        >
          <Introduction />
          <References />
        </main>

        {/* <Hero />
        <Introduction />
        <NewIntroduction />
        <Skills />
        <References />
        <Contact />
        <Sidebar />
        {dark && <BackgroundAnimation />} */}
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
