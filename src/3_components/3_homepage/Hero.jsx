import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { IconContext } from 'react-icons';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Hero = () => {
  const { dark } = useGlobalContext();
  const data = useStaticQuery(
    graphql`
      query {
        desktop: allFile(
          filter: {
            relativeDirectory: { eq: "background-images" }
            name: { eq: "desktop_background" }
          }
        ) {
          edges {
            node {
              id
              name
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  width: 1000
                  layout: CONSTRAINED
                  quality: 90
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    `
  );

  // const handleGoToNextPartClick = () => {
  //   window.scrollTo({
  //     top: document
  //       .getElementById('introduction_section')
  //       .getBoundingClientRect().y,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div style={{ display: 'grid' }} className="bg-black">
      <GatsbyImage
        style={{
          gridArea: '1/1',
          height: '100vh',
        }}
        alt=""
        image={getImage(data.desktop.edges[0].node)}
        loading="eager"
      />
      <div
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid',
        }}
      >
        <div className="flex flex-col gap-4 items-center justify-center h-full md:pt-28  text-center ">
          <h1 className="font-semibold text-5xl md:mb-4 !text-white">
            Gabriel Gourcerol
          </h1>
          <h2 className="text-2xl flex flex-col gap-4 items-center md:items-start ">
            <span className="md:pl-24 !text-white">
              Développeur web full-stack
            </span>
            <span className="md:pl-32 !text-white">
              spécialisé solutions Saas
            </span>
          </h2>
          <div className="mt-8">
            <AnchorLink
              to="/#introduction_section"
              title="aller à l'introduction"
              className={`${
                dark ? 'btn btn--dark ' : 'btn'
              } rounded-full border dark:border-0  !text-[#121212] !font-normal flex items-center justify-center`}
              stripHash
            >
              <IconContext.Provider
                value={{ size: '1.4rem' }}
                className="pointer-events-none"
              >
                <BsFillArrowDownCircleFill className="pointer-events-none" />
              </IconContext.Provider>
            </AnchorLink>
            {/* <button
              className={`${
                dark ? 'btn btn--dark ' : 'btn'
              } rounded-full border dark:border-0  !text-[#121212] !font-normal flex items-center justify-center`}
              type={'Anchor'}
              to={'/#introduction_section'}
              alt_text={'Voir la partie suivante'}
              aria-label={'Aria Name'}
              onClick={() => handleGoToNextPartClick()}
            >
              <IconContext.Provider
                value={{ size: '1.4rem' }}
                className="pointer-events-none"
              >
                <BsFillArrowDownCircleFill className="pointer-events-none" />
              </IconContext.Provider>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
