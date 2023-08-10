import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const AvatarPng = () => {
  const data = useStaticQuery(avatarQuery);
  let avatarImgPath =
    data.allFile.edges[0].node.childImageSharp.gatsbyImageData;

  return (
    // <h2>img</h2>
    <div className="avatar">
      <GatsbyImage alt="imageAlt" image={avatarImgPath} loading="eager" />
    </div>
  );
};
export default AvatarPng;

const avatarQuery = graphql`
  query MyAvatarQuery {
    allFile(
      filter: { relativeDirectory: { eq: "avatar" }, name: { eq: "avatarPng" } }
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
`;
