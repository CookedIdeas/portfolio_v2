import React, { useEffect, useState } from 'react';
import ReferenceCarousel from './ReferenceCarousel';
import ReferenceInformation from './ReferenceInformation';
import { graphql, useStaticQuery } from 'gatsby';
import RefLogos from './RefLogos';

const Reference = ({ project }) => {
  const data = useStaticQuery(projectImageQuery);
  const imagesArray = data.allFile.edges;
  const [thisProjectImages, setThisProjectImages] = useState([]);

  useEffect(() => {
    let images = imagesArray.filter(
      (image) => image.node.name.split('_')[0] === project.basic_name
    );
    setThisProjectImages(images);
  }, [project]);

  return (
    <div className="w-full h-auto flex items-stretch">
      <div className="w-2/3  flex flex-col gap-4 py-6 justify-between items-center">
        <RefLogos project={project} />
        <ReferenceCarousel project={project} imagesArray={thisProjectImages} />
      </div>
      <ReferenceInformation project={project} />
    </div>
  );
};
export default Reference;

const projectImageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          id
          name
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              width: 500
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
