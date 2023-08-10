import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { image } from '../../../1_assets/images/projects_logos/bobeebot_project_logo_light.png';
import { useGlobalContext } from '../../../2_context/GlobalContext';

const RefLogos = ({ project }) => {
  const { dark } = useGlobalContext();
  const { basic_name } = project;

  const logosContainerStyle = 'w-1/3 h-auto';

  if (basic_name === 'bobee') {
    return (
      <div className={logosContainerStyle}>
        {dark ? (
          <StaticImage
            src="../../../1_assets/images/projects_logos/bobeebot_project_logo_dark.png"
            alt="logo bobeebot"
          />
        ) : (
          <StaticImage
            src="../../../1_assets/images/projects_logos/bobeebot_project_logo_light.png"
            alt="logo bobeebot"
          />
        )}
      </div>
    );
  }

  if (basic_name === 'labrhcarto2023') {
    return (
      <div className={logosContainerStyle}>
        <StaticImage
          src="../../../1_assets/images/projects_logos/lelabrh.png"
          alt="logo client 1"
        />
        {dark ? (
          <StaticImage
            src="../../../1_assets/images/projects_logos/vivatech_2023_dark.png"
            alt="logo bobeebot"
          />
        ) : (
          <StaticImage
            src="../../../1_assets/images/projects_logos/vivatech_2023_light.png"
            alt="logo bobeebot"
          />
        )}
      </div>
    );
  }
  return <div></div>;
};
export default RefLogos;
