import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(
          relativePath: { eq: "background-images/desktop_background.png" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        style={{
          height: '100%',
        }}
        backgroundColor={`#040e18`}
      >
        <div className="flex flex-col gap-4 items-center h-full justify-center md:block md:absolute md:top-1/2 md:left-1/4 ">
          <h2 className="font-bold text-5xl md:mb-4">Gabriel Gourcerol</h2>
          <h3 className="text-2xl flex flex-col gap-4 items-center md:items-start">
            <span className="md:pl-24">Développeur full-stack</span>
            <span className="md:pl-32">spécialisé solutions Saas</span>
          </h3>
        </div>
      </BackgroundImage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

const StyledHero = styled(Hero)`
  width: 100vw;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledHero;
