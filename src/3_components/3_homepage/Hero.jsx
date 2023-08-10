import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
    <div style={{ display: 'grid' }}>
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
        <div className="flex flex-col gap-4 items-center justify-center h-full justify-center md:pt-28">
          <h1 className="font-semibold text-5xl md:mb-4 !text-white">
            Gabriel Gourcerol
          </h1>
          <h3 className="text-2xl flex flex-col gap-4 items-center md:items-start ">
            <span className="md:pl-24 !text-white">Développeur full-stack</span>
            <span className="md:pl-32 !text-white">
              spécialisé solutions Saas
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
