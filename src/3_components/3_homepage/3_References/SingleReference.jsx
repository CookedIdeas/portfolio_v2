import React, { useEffect, useState } from 'react';
import ReferenceCarousel from './ReferenceCarousel';
import ReferenceInformation from './ReferenceInformation';
import { graphql, useStaticQuery } from 'gatsby';
import RefLogos from './RefLogos';

const SingleReference = ({ project }) => {
  const data = useStaticQuery(projectImageQuery);
  const imagesArray = data.allFile.edges;
  const [thisProjectImages, setThisProjectImages] = useState([]);

  useEffect(() => {
    let images = imagesArray.filter(
      (image) => image.node.name.split('_')[0] === project.basic_name
    );
    setThisProjectImages(images);
  }, [project, imagesArray]);

  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center lg:items-stretch">
      <div className="w-full px-4 lg:w-2/3 flex flex-col-reverse sm:flex-row lg:flex-col gap-8 lg:gap-4 lg:px-0 lg:py-6 justify-around lg:justify-between items-center">
        {project.refLogos && (
          <div className="hidden lg:flex  w-full  justify-center">
            <RefLogos project={project} />
          </div>
        )}

        <ReferenceCarousel project={project} imagesArray={thisProjectImages} />
      </div>
      <ReferenceInformation project={project} />
    </div>
  );
};
export default SingleReference;

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
              quality: 90
              formats: WEBP
            )
          }
        }
      }
    }
  }
`;
