import * as React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../2_context/GlobalContext';
import Seo from '../3_components/1_global/Seo';
import Hero from '../3_components/3_homepage/Hero';
import Introduction from '../3_components/3_homepage/Introduction';
import Sidebar from '../3_components/2_layouts/1_navigation/Sidebar';
import References from '../3_components/3_homepage/References';
import Footer from '../3_components/2_layouts/Footer';
import Recommandations from '../3_components/3_homepage/Recommandations';
import WorkProcess from '../3_components/3_homepage/WorkProcess';
import Skills from '../3_components/3_homepage/Skills';
import Contact from '../3_components/3_homepage/Contact';
import Header from '../3_components/2_layouts/1_navigation/Header';
import { useState } from 'react';

const IndexPage = () => {
  const { dark, closeNavHeader } = useGlobalContext();

  useEffect(() => {
    const handleClick = (event) => {
      closeNavHeader(false);
    };
    document
      .getElementById('main_content')
      .addEventListener('click', handleClick);
    return () => {
      document
        .getElementById('main_content')
        .removeEventListener('click', handleClick);
    };
  });

  // nav (sidebar and header) from absolute to fixed positions
  const [isSidebarInFooter, setIsSidebarInFooter] = useState(false);
  const [isSidebarInHero, setIsSidebarInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = 160;
      const clientScreenHeight = document.documentElement.clientHeight;
      const topScrollPosition = document.documentElement.scrollTop;
      topScrollPosition > clientScreenHeight
        ? setIsSidebarInHero(false)
        : setIsSidebarInHero(true);

      const documentHeightWithoutFooter =
        window.document.body.offsetHeight - footerHeight;
      const bottomScrollPosition = topScrollPosition + clientScreenHeight;
      bottomScrollPosition > documentHeightWithoutFooter
        ? setIsSidebarInFooter(true)
        : setIsSidebarInFooter(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${dark ? 'dark' : ''} bg-background-light
        dark:bg-background-dark h-full`}
    >
      <Hero />

      <div id="index_content" className="relative">
        <Header isSidebarInHero={isSidebarInHero} />
        <Sidebar
          isSidebarInFooter={isSidebarInFooter}
          isSidebarInHero={isSidebarInHero}
        />

        <main
          id="main_content"
          className="min-h-screen
        flex flex-col gap-20
       px-8 md:px-[5%]
       py-8 md:py-0

        overflow-x-hidden
        homePageContent__main
        bg-background-light
        dark:bg-background-dark
        h-full"
        >
          <Introduction />
          <References />
          <Recommandations />
          <WorkProcess />
          <Skills />
          <Contact />
        </main>

        {/*

        {dark && <BackgroundAnimation />} */}
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
