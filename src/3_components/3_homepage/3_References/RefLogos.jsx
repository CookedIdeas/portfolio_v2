import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useGlobalContext } from '../../../2_context/GlobalContext';
import { useState } from 'react';
import { useEffect } from 'react';

const RefLogos = ({ project, logos }) => {
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

  const logosContainerStyle = `${
    darkLogos.length <= 1 ? 'w-1/3 md:w-1/3 xl:w-2/3' : 'w-1/3 md:w-1/3'
  }  min-w-[10rem]  lg:max-h-40 h-auto order-2 lg:order-1 flex flex-row justify-center items-center gap-8 lg:flex-col`;

  if (logos && darkLogos.length > 0 && lightLogos.length > 0) {
    if (dark) {
      return (
        <div className={logosContainerStyle}>
          {darkLogos.map((logo) => {
            return (
              <GatsbyImage
                key={logo.node.id}
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
                key={logo.node.id}
                imgStyle={{ objectFit: 'contain' }}
                image={getImage(logo.node)}
                alt={`logo ${project.basic_name}`}
              />
            );
          })}
        </div>
      );
    }
  }
  return <div></div>;
};
export default RefLogos;
