import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AvatarPng = () => {
  const data = useStaticQuery(avatarQuery);
  let avatarImgPath =
    data.allFile.edges[0].node.childImageSharp.gatsbyImageData;

  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
    console.log('loaded');
  };

  // useEffect(() => {
  //   if (ref.current && ref.current.complete) {
  //     onLoad();
  //   }
  // });

  return (
    // <h2>img</h2>
    <div className="avatar">
      <GatsbyImage
        alt="imageAlt"
        image={avatarImgPath}
        loading="eager"
        // ref={ref}
        onLoad={onLoad}
      />
    </div>
    // <StaticImage
    //   alt="avatar"
    //   image="../../assets/images/avatar/avatarPng.png"
    //   placeholder="blurred"
    //   layout="fixed"
    //   width={200}
    //   height={200}
    // />
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
