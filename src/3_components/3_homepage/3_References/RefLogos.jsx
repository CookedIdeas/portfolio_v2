import React from 'react';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { useGlobalContext } from '../../../2_context/GlobalContext';
import { useState } from 'react';
import { useEffect } from 'react';

const RefLogos = ({ project, logos }) => {
  console.log(logos);
  const { dark } = useGlobalContext();
  const [darkLogos, setDarkLogos] = useState([]);
  const [lightLogos, setLightLogos] = useState([]);

  useEffect(() => {
    if (logos) {
      let darkLogos = logos.filter(
        (logo) => logo.node.name.split('_').pop() === 'dark'
      );
      setDarkLogos(darkLogos);

      let lightLogos = logos.filter(
        (logo) => logo.node.name.split('_').pop() === 'light'
      );
      setLightLogos(lightLogos);
    }
  }, [logos]);

  const logosContainerStyle =
    'w-full sm:w-2/3 lg:max-h-40 h-auto order-2 lg:order-1 flex flex-row justify-center items-center gap-8 lg:flex-col';

  if (
    logos &&
    logos.length === 2 &&
    darkLogos.length > 0 &&
    lightLogos.length > 0
  ) {
    if (dark) {
      return (
        <div className={logosContainerStyle}>
          <GatsbyImage
            imgStyle={{ objectFit: 'contain' }}
            image={getImage(darkLogos[0].node)}
            alt={`logo ${project.basic_name}`}
          ></GatsbyImage>
        </div>
      );
    } else {
      return (
        <div className={logosContainerStyle}>
          <GatsbyImage
            imgStyle={{ objectFit: 'contain' }}
            image={getImage(lightLogos[0].node)}
            alt={`logo ${project.basic_name}`}
          ></GatsbyImage>
        </div>
      );
    }
  }

  if (
    logos &&
    logos.length === 4 &&
    darkLogos.length > 0 &&
    lightLogos.length > 0
  ) {
    console.log('darkLogos', darkLogos);
    if (dark) {
      return (
        <div className={logosContainerStyle}>
          {darkLogos.map((logo) => {
            console.log(logo);
            return (
              <GatsbyImage
                imgStyle={{ objectFit: 'contain' }}
                image={getImage(logo.node)}
                alt={`logo ${project.basic_name}`}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={logosContainerStyle}>
          {lightLogos.map((logo) => {
            return (
              <GatsbyImage
                imgStyle={{ objectFit: 'contain' }}
                image={getImage(logo.node)}
                alt={`logo ${project.basic_name}`}
              ></GatsbyImage>
            );
          })}
        </div>
      );
    }
  }

  // const data = useStaticQuery(projectLogosQuery);
  // const imagesArray = data.allFile;
  // console.log('imagesArray', imagesArray);

  // const logosContainerStyle =
  //   'w-full sm:w-2/3 lg:max-h-40 h-auto order-2 lg:order-1 flex flex-row justify-center items-center gap-8 lg:flex-col';

  // if (basic_name === 'bobee') {
  //   return (
  //     <div className={logosContainerStyle}>
  //       {dark ? (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/bobeebot_project_logo_dark.png"
  //           alt="logo bobeebot"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-1/2 lg:w-full"
  //         />
  //       ) : (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/bobeebot_project_logo_light.png"
  //           alt="logo bobeebot"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-1/2 lg:w-full contain"
  //         />
  //       )}
  //     </div>
  //   );
  // }

  // if (basic_name === 'labrhcarto2023') {
  //   return (
  //     <div className={logosContainerStyle}>
  //       {dark ? (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/lelabrh_dark.png"
  //           alt="logo client 1"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-1/3 lg:w-2/3 "
  //         />
  //       ) : (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/lelabrh_light.png"
  //           alt="logo client 1"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-full lg:w-full"
  //         />
  //       )}

  //       {dark ? (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/vivatech_2023_dark.png"
  //           alt="logo bobeebot"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-1/2 lg:w-full"
  //         />
  //       ) : (
  //         <StaticImage
  //           src="../../../1_assets/images/projects_logos/vivatech_2023_light.png"
  //           alt="logo bobeebot"
  //           imgStyle={{ objectFit: 'contain' }}
  //           class="w-1/2 lg:w-full"
  //         />
  //       )}
  //     </div>
  //   );
  // }
  return <div></div>;
};
export default RefLogos;
