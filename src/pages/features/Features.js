import React from 'react';
import './features.css';
import FeaturesBanner from '../../components/features_Component/FeaturesBanner';
import FeaturesSection from '../../components/features_Component/FeaturesSection';
import FeaturesFaq from '../../components/features_Component/FeaturesFaq';

const Features = () => {
  return (
    <div>
      <FeaturesBanner/>
      <section className='features-back-card-section'>
         <div className='col-lg-6 features-background-card'>
            <span className='features-card-header'>
            Lorem ipsum <span className='features-card-sub-header'>text</span>
            </span>
            <div className='card-item-div'>
                <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                 print, and publishing industries for previewing layouts and 
                 visual mockups. 
                </p>
            </div>
            <div className='card-item-div'>
                <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                 print, and publishing industries for previewing layouts and 
                 visual mockups. 
                </p>
            </div>
            <div className='card-item-div'>
                <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                 print, and publishing industries for previewing layouts and 
                 visual mockups. 
                </p>
            </div>
         </div>
      </section>
      <FeaturesSection/>
      <FeaturesFaq/>
    </div>
  )
}

export default Features
