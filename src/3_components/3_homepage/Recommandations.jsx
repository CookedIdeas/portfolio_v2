import React from 'react';
import SingleRecommandation from './4_Recommandations/SingleRecommandation';
import { graphql, useStaticQuery } from 'gatsby';
import { recomandations } from '../../1_assets/datas/recommandations';

const query = graphql`
  query MyRecoFacesQuery {
    allFile(filter: { relativeDirectory: { eq: "recommandations_faces" } }) {
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

const Recommandations = () => {
  const { allFile } = useStaticQuery(query);
  const facesArray = allFile.edges;
  // console.log(facesArray);
  // console.log(facesArray.filter((face) => face.node.name === 'rodolphe'));
  return (
    <section className="min-h-35 flex flex-col gap-12">
      <h2>Ce qu'ils disent de moi</h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        {recomandations.map((reco) => (
          <SingleRecommandation
            key={reco.id}
            reco={reco}
            faceImg={facesArray.filter((face) => face.node.name === reco.name)}
          />
        ))}
      </div>
    </section>
  );
};
export default Recommandations;
