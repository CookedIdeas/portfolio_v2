import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { image } from '../../../1_assets/images/projects_logos/bobeebot_project_logo_light.png';
import { useGlobalContext } from '../../../2_context/GlobalContext';

const RefLogos = ({ project }) => {
  const { dark } = useGlobalContext();
  const { basic_name } = project;

  const logosContainerStyle =
    'w-full sm:w-2/3 h-auto order-2 lg:order-1 flex flex-row justify-center gap-8 lg:flex-col';

  if (basic_name === 'bobee') {
    return (
      <div className={logosContainerStyle}>
        {dark ? (
          <StaticImage
            src="../../../1_assets/images/projects_logos/bobeebot_project_logo_dark.png"
            alt="logo bobeebot"
            class="w-1/2  lg:w-full"
          />
        ) : (
          <StaticImage
            src="../../../1_assets/images/projects_logos/bobeebot_project_logo_light.png"
            alt="logo bobeebot"
            class="w-1/2 lg:w-full"
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
          class="w-full lg:w-full"
        />
        {dark ? (
          <StaticImage
            src="../../../1_assets/images/projects_logos/vivatech_2023_dark.png"
            alt="logo bobeebot"
            class="w-1/2 lg:w-full"
          />
        ) : (
          <StaticImage
            src="../../../1_assets/images/projects_logos/vivatech_2023_light.png"
            alt="logo bobeebot"
            class="w-1/2 lg:w-full"
          />
        )}
      </div>
    );
  }
  return <div></div>;
};
export default RefLogos;
