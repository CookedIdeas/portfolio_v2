import React from 'react';
import { socialLinks } from '../../../1_assets/datas/socialLinks.js';

const SocialLinks = ({ forSidebar }) => {
  console.log(socialLinks);
  return (
    <div
      className={`flex items-center justify-center ${
        forSidebar ? 'gap-3' : 'gap-6 h-12 flex-row'
      }`}
    >
      {/*  */}
      {socialLinks.map((link) => {
        const { id, icon_navHeader, icon_sidebar, alt_fr, url } = link;
        return (
          <a
            key={id}
            className="text-primary-light dark:text-darkGreen h-8 w-8  fill-primary-light dark:fill-primary-dark"
            aria-label={alt_fr}
            href={url}
            rel="noreferrer"
            target="_blank"
          >
            {forSidebar ? icon_sidebar : icon_navHeader}
          </a>
        );
      })}
    </div>
  );
};
export default SocialLinks;
