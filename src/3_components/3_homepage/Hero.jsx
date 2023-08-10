import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Button from '../99_smallReusable/Button';
import { IconContext } from 'react-icons';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Hero = () => {
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
                  quality: 100
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    `
  );

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
            <span className="md:pl-24 !text-white">Développeur full-stack</span>
            <span className="md:pl-32 !text-white">
              spécialisé solutions Saas
            </span>
          </h2>
          <div className="mt-8">
            <Button
              type={'Anchor'}
              to={'/#introduction_section'}
              alt_text={'Voir la partie suivante'}
              text_fr={
                <IconContext.Provider
                  value={{ size: '1.4rem' }}
                  className="pointer-events-none"
                >
                  <BsFillArrowDownCircleFill className="pointer-events-none" />
                </IconContext.Provider>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
