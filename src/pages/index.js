import * as React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../2_context/GlobalContext';
import Layout from '../3_components/1_global/Layout';
import Seo from '../3_components/1_global/Seo';
import Hero from '../3_components/3_homepage/Hero';
import Introduction from '../3_components/3_homepage/Introduction';

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
    <Layout>
      <main
        id="index_content"
        className="
        bg-background-light
        dark:bg-background-dark

        flex flex-col
        max-w-[1240px]
        overflow-x-hidden
        "
        //  dark:bg-background-dark         pt-16 min-h-screen sm:px-8
      >
        <Hero />
        <Introduction />
        {/* <Hero />
        <Introduction />
        <NewIntroduction />
        <Skills />
        <References />
        <Contact />
        <Sidebar />
        {dark && <BackgroundAnimation />} */}
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
