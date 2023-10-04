import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import Footer from '../2_layouts/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import useCloseNavBarOnClick from '../../4_customHooks/useCloseNavBarOnClick';
import { Script } from 'gatsby';
import Hero from '../3_homepage/Hero';
import Header from '../2_layouts/1_navigation/Header';
import Sidebar from '../2_layouts/1_navigation/Sidebar';

const Layout = ({ children, isIndexPage = false }) => {
  const { dark } = useGlobalContext();
  useCloseNavBarOnClick();

  // nav (sidebar and header) from absolute to fixed positions
  const [isSidebarInFooter, setIsSidebarInFooter] = useState(false);
  const [isSidebarInHero, setIsSidebarInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = 160;
      let clientScreenHeight = document.documentElement.clientHeight;
      const topScrollPosition = document.documentElement.scrollTop;

      if (isIndexPage) {
        topScrollPosition > clientScreenHeight
          ? setIsSidebarInHero(false)
          : setIsSidebarInHero(true);
      } else {
        // if no hero -> always setIsSidebarInHero(false)
        setIsSidebarInHero(false);
      }

      const documentHeightWithoutFooter =
        window.document.body.offsetHeight - footerHeight;
      const bottomScrollPosition = topScrollPosition + clientScreenHeight;
      bottomScrollPosition > documentHeightWithoutFooter
        ? setIsSidebarInFooter(true)
        : setIsSidebarInFooter(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isIndexPage]);

  return (
    <div
      className={`${dark ? 'dark' : ''} bg-background-light
        dark:bg-background-dark h-full`}
    >
      <Script id="abla-analytics-script">{` !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_jmD6XPHBZKL8DUebf8ruzOOnAyFU6SGUFDm3jKPE8tR',{api_host:'https://e.abla.io'})`}</Script>

      {/* HERO ONLY FOR INDEX PAGE */}
      {isIndexPage && <Hero />}

      <div id="index_content" className="relative">
        <Header isSidebarInHero={isSidebarInHero} />
        <Sidebar
          isSidebarInFooter={isSidebarInFooter}
          isSidebarInHero={isSidebarInHero}
        />

        <main
          id="main_content"
          className="min-h-[75vh]
        flex flex-col gap-20
       px-4 sm:px-8 md:px-[4%]
       py-8 md:py-0

        overflow-x-hidden
        homePageContent__main
        bg-background-light
        dark:bg-background-dark
        h-full"
        >
          {children}
        </main>

        {/*

        {dark && <BackgroundAnimation />} */}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
