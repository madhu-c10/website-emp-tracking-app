import React, { useRef } from 'react';
import { featuresSecImg, heroBanImg } from '../../assets/image';
import { useInView } from "react-intersection-observer";

const FeaturesSection = () => {

  const imageRef = useRef(null);

  const { ref: firstContainer, inView: firstInView } = useInView({
    threshold: 0,
  
  });

  const { ref: secondContainer, inView: secondInView } = useInView({
    threshold: 0
  });

  const { ref: thirdContainer, inView: thirdInView } = useInView({
    threshold: 0
  });

  const getImage = () => {
    if (firstInView)
      return featuresSecImg;
    if (secondInView)
      return heroBanImg;
    if (thirdInView)
    return featuresSecImg;
  };

  return (
    <div>
      <section className='features-section-sec'>
        <div className='container-fluid'>
          <div className='row features-text-row'>
            <div className='col text-col text-left'>
              <span className='features-image-section-header-span'>Lorem ipsum is place holder <span>text commonly</span> </span>
              <div className='mt-4'>
                <p className='features-header-para'>
                  Lorem ipsum is placeholder text commonly used in the graphic, print,
                  and publishing industries for previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          </div>
          <div className='image-wrapper'>
            <div className='row'>
              <div className='col-sm-6'>
              <div className='image-wrapper-text-div' >
              <span ref={firstContainer} className='left-header-span'>A Lorem ipsum is placeholder </span>
                  <p className='left-para'>
                  Lorem ipsum is placeholder text commonly used in the graphic, print,
                   and publishing industries for previewing layouts and visual mockups. Lorem ipsum is 
                   placeholder text commonly used in the graphic,
                   print, and publishing industries for previewing layouts and visual mockups.
                  </p>
              </div>

              <div className='image-wrapper-text-div'>
              <span ref={secondContainer} className='left-header-span'>A Lorem ipsum is placeholder </span>
                  <p className='left-para'>
                  Lorem ipsum is placeholder text commonly used in the graphic, print,
                   and publishing industries for previewing layouts and visual mockups. Lorem ipsum is 
                   placeholder text commonly used in the graphic,
                   print, and publishing industries for previewing layouts and visual mockups.
                  </p>
              </div>

              <div className='image-wrapper-text-div'>
              <span ref={thirdContainer} className='left-header-span'>A Lorem ipsum is placeholder </span>
                  <p className='left-para'>
                  Lorem ipsum is placeholder text commonly used in the graphic, print,
                   and publishing industries for previewing layouts and visual mockups. Lorem ipsum is 
                   placeholder text commonly used in the graphic,
                   print, and publishing industries for previewing layouts and visual mockups.
                  </p>
              </div>
              </div>
              <div className='features-image-inveiw col-sm-6'>
              <img src={getImage()} ref={imageRef} className={`img-fluid ${imageRef?"img-1":"features-view-image"}`}
               alt="Responsive image"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesSection;
