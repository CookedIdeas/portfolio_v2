import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';

const SingleRecommandation = ({ reco, faceImg }) => {
  const { name, fullName, position, company, verbatim, linkedinLink } = reco;
  return (
    <Wrapper className="p-5 bg-white rounded-lg flex flex-col gap-4 lg:w-1/2 h-full drop-shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4 pl-4">
        <div className="drop-shadow-0 transition-all hover:drop-shadow-lg">
          {faceImg.length > 0 && (
            <a
              className="relative"
              href={linkedinLink}
              rel="noreferrer"
              target="_blank"
              aria-label={`lien vers le profil linkedIn de ${name}`}
            >
              <div className="rounded-full overflow-hidden w-20">
                <GatsbyImage
                  alt={`portrait de ${name}`}
                  image={getImage(faceImg[0].node)}
                  loading="eager"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-white text-black">
                <BsLinkedin size={'1.2rem'} />
              </div>
            </a>
          )}
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="!text-black !font-semibold text-center sm:text-start">
            {fullName} {company && `- ${company}`}
          </h3>
          <span className="!text-black !font-medium ">{position}</span>
        </div>
      </div>
      <p
        className="!font-normal !text-start"
        dangerouslySetInnerHTML={{ __html: verbatim }}
      ></p>
    </Wrapper>
  );
};
export default SingleRecommandation;

const Wrapper = styled.div`
  & > div > h3,
  p {
    color: black !important;
  }
`;
