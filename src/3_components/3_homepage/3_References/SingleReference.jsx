import React, { useEffect, useState } from 'react';
import ReferenceCarousel from './ReferenceCarousel';
import ReferenceInformation from './ReferenceInformation';
import { graphql, useStaticQuery } from 'gatsby';
import RefLogos from './RefLogos';

const SingleReference = ({ project }) => {
  const data = useStaticQuery(projectImageQuery);

  const [thisProjectImages, setThisProjectImages] = useState([]);
  const [thisProjectsClientsLogos, setThisProjectsClientsLogos] = useState([]);

  useEffect(() => {
    let projectsImages = data.projectsImages.edges;
    let images = projectsImages.filter(
      (image) => image.node.name.split('_')[0] === project.basic_name
    );
    setThisProjectImages(images);

    if (project.client_basic_name) {
      // client has logos to display
      let projectsLogos = data.refLogos.edges;

      let logos = projectsLogos.filter(
        (image) => image.node.name.split('_')[0] === project.client_basic_name
      );
      if (logos) {
        setThisProjectsClientsLogos(logos);
      }
    }
  }, [project, data.projectsImages.edges, data.refLogos.edges]);

  return (
    <div className="w-full h-auto flex flex-col xl:flex-row items-center xl:items-stretch">
      <div className="w-full px-4 lg:w-2/3 flex flex-col-reverse sm:flex-row xl:flex-col gap-8 lg:gap-4 xl:px-0 xl:py-6 justify-around xl:justify-between items-center">
        {thisProjectsClientsLogos.length > 0 && (
          <div className="hidden xl:flex  w-full h-1/2 justify-center items-center">
            <RefLogos project={project} logos={thisProjectsClientsLogos} />
          </div>
        )}

        <ReferenceCarousel project={project} imagesArray={thisProjectImages} />
      </div>
      <ReferenceInformation
        project={project}
        logos={thisProjectsClientsLogos}
      />
    </div>
  );
};
export default SingleReference;

const projectImageQuery = graphql`
  query {
    projectsImages: allFile(filter: { relativeDirectory: { eq: "projects" } }) {
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
    refLogos: allFile(filter: { relativeDirectory: { eq: "projects_logos" } }) {
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
