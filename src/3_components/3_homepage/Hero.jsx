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
        // className={className}
        // className="h-screen"
        fluid={imageData}
        style={{
          height: '100%',
          // Defaults are overwrite-able by setting one of the following:
          // backgroundSize: '',
          // backgroundPosition: '',
          // backgroundRepeat: '',
        }}
        backgroundColor={`#040e18`}
      >
        <div className="absolute top-1/3 left-1/4  flex flex-col gap-4">
          <h2 className="font-bold text-4xl ">Gabriel Gourcerol</h2>
          <h3 className=" text-2xl flex flex-col gap-4">
            <span className="pl-8">Développeur full-stack</span>
            <span className="pl-16">spécialisé solutions Saas</span>
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
