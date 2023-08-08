import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { ReactComponent as MaltLogo } from '../images/social_logos/malt_2.svg';
const iconSize = 40;
export const socialLinks = [
  {
    id: 1,
    alt_fr: 'lien vers page GitHub de Gabriel Gourcerol',
    alt_eng: "link to Gabriel Gourcerol's GitHub page",
    icon_navHeader: <BsGithub size={40} />,
    icon_sidebar: <BsGithub size={30} />,
    url: 'https://github.com/CookedIdeas',
  },
  {
    id: 2,
    alt_fr: 'lien vers profil LinkedIn de Gabriel Gourcerol',
    alt_eng: "link to Gabriel Gourcerol's LinkedIn profile",
    icon_navHeader: <BsLinkedin size={40} />,
    icon_sidebar: <BsLinkedin size={30} />,
    url: 'https://www.linkedin.com/in/gabriel-gourcerol-b0508a271/',
  },
  {
    id: 3,
    alt_fr: 'lien vers profil Malt de Gabriel Gourcerol',
    alt_eng: "link to Gabriel Gourcerol's Malt profile",
    icon_navHeader: <MaltLogo />,
    icon_sidebar: <MaltLogo />,
    url: 'https://www.malt.fr/profile/gabrielgourcerol',
  },
];
