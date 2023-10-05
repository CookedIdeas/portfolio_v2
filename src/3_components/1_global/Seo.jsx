import React from 'react';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { useSiteMetadata } from '../../4_customHooks/useSiteMetadata';
import meta_img from '../../1_assets/images/meta_image/meta_img.png';

const Seo = ({ title, description, pathname, children }) => {
  const { lang_fr } = useGlobalContext();
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
    image: meta_img,
  };

  return (
    <>
      <html lang={lang_fr ? 'fr' : 'eng'} />
      <title>{seo.title}</title>
      <meta name="color-scheme" content="dark light"></meta>
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
