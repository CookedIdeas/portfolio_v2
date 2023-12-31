import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from 'react-icons/bi';

const ReferenceCarousel = ({ imagesArray, project }) => {
  const chevronContainerStyle =
    'top-0 bottom-0  flex justify-center items-center p-3 xl:p-1 opacity-60 hover:opacity-100 cursor-pointer z-20';
  const chevronStyle = 'w-6 h-6 text-neutral-400';

  if (imagesArray.length > 1) {
    return (
      <div
        className="max-h-2/3 z-0 relative rounded-t-md xl:rounded-tr-none xl:rounded-l-md overflow-hidden max-w-[30rem] xl:max-w-none w-full shadow-lg 
    order-1 lg:order-2"
      >
        {imagesArray.length > 0 && (
          <Carousel
            showThumbs={false}
            ariaLabel={`carousel of ${project.title} project`}
            autoPlay={true}
            infiniteLoop={true}
            stopOnHover={true}
            showStatus={true}
            showIndicators={false}
            dynamicHeight={false}
            centerMode={false}
            width={'100%'}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <button
                  aria-label={`Voir l'image précédente du projet ${project.title}`}
                  className={`${
                    hasPrev ? 'absolute' : 'hidden'
                  } ${chevronContainerStyle} left-0 `}
                  onClick={clickHandler}
                >
                  <BiSolidChevronLeftCircle className={chevronStyle} />
                </button>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <button
                  aria-label={`Voir l'image suivante du projet ${project.title}`}
                  className={`${
                    hasNext ? 'absolute' : 'hidden'
                  } ${chevronContainerStyle} right-0 `}
                  onClick={clickHandler}
                >
                  <BiSolidChevronRightCircle className={chevronStyle} />
                </button>
              );
            }}
          >
            {imagesArray.map((image) => {
              return (
                <GatsbyImage
                  key={image.node.id}
                  alt={image.node.name}
                  image={getImage(image.node)}
                  loading="eager"
                />
              );
            })}
          </Carousel>
        )}
      </div>
    );
  } else {
    if (imagesArray.length > 0) {
      return (
        <GatsbyImage
          className="max-h-2/3  z-0 relative rounded-t-md xl:rounded-tr-none xl:rounded-l-md overflow-hidden max-w-[30rem] xl:max-w-none w-full shadow-lg 
    order-1 lg:order-2"
          imgStyle={{ width: '100%' }}
          image={getImage(imagesArray[0].node)}
          alt={project.title}
        />
      );
    }
  }
};
export default ReferenceCarousel;
