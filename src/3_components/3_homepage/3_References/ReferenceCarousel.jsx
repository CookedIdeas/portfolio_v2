import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ReferenceCarousel = ({ imagesArray, project }) => {
  return (
    <div className="ml-4 h-2/3 z-0 relative rounded-l-md overflow-hidden  max-w-[30rem] w-full shadow-md">
      <Carousel
        showThumbs={false}
        ariaLabel={`carousel of ${project.title} project`}
        autoFocus={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={false}
        centerMode={false}
        width={'100%'}
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
    </div>
  );
};
export default ReferenceCarousel;
