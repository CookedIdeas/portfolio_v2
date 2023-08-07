import React from 'react';

import { useGlobalContext } from '../../2_context/GlobalContext';
import { useSiteMetadata } from '../../4_customHooks/useSiteMetadata';
// import image from '../../../public/';

const Seo = ({ title, description, pathname, children }) => {
  const { lang_fr, dark } = useGlobalContext();
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    linkedInUsername,
    siteDefaultLang,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
    siteDefaultLang,
    image: `${siteUrl}/static/meta_img.png}`,
  };

  return (
    <>
      <html lang={lang_fr ? 'fr' : 'eng'} class={dark && 'dark'} />
      <title>{seo.title + ' | Gabriel G. Web Developer'}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        property="og:title"
        content="Portfolio | Gabriel G. Web Developer"
      />
      <meta
        property="og:description"
        content="Come have a look to my work ;)"
      ></meta>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      {children}
    </>
  );
};
export default Seo;
