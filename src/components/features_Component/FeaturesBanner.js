import React, { useEffect, useState } from 'react';
import { f_ban_botLeft1, f_ban_botLeft2, f_ban_botLeft3, f_ban_botRight1, f_ban_botRight2, f_ban_botRight3, f_ban_topLeft1, f_ban_topLeft2, f_ban_topLeft3, f_ban_topRight1, f_ban_topRight2, f_ban_topRight3, features_BannerImg } from '../../assets/image';

const FeaturesBanner = () => {

    
    const useImageInterval = (images, delay) => {
        const [currentImages, setCurrentImages] = useState(images);
        console.log(currentImages);

        useEffect(() => {
            const intervalId = setInterval(() => {
                 /*  changeImages(setCurrentImages, currentImages);  */ 
            }, delay);

            return () => clearInterval(intervalId);
        }, [currentImages, delay]);

        return currentImages;
    };



    const images1 = useImageInterval([f_ban_topLeft1, f_ban_topLeft2, f_ban_topLeft3], 2000);
    const images2 = useImageInterval([f_ban_topRight1, f_ban_topRight2, f_ban_topRight3], 2500);
    const images3 = useImageInterval([f_ban_botRight1, f_ban_botRight2, f_ban_botRight3], 3000);
    const images4 = useImageInterval([f_ban_botLeft1, f_ban_botLeft2, f_ban_botLeft3], 3500);

    console.log(images1[1]);

    return (
        <div>
            <section className='featurs-banner-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-7'>
                        <span className='features-banner-left-div-span'>
                            Lorem ipsum is place <br /> holder <span className='features-banner-left-div-inner-span'>text commonly</span>
                        </span><br />
                        <span className='features-banner-sub-text'>Lorem ipsum is place holder text commonly </span>
                        </div>
                        <div className='col-lg-5'>
                        <div className='features-ban-animaton-main-div'>
                            <div className='features-ban-animaton-inner-div'>
                                <div className='ban-top-left-div'>
                                <img src={f_ban_topLeft1} className="img-fluid one" alt="..."/>
                                </div>
                                <div className='ban-top-right-div'>
                                <img src={f_ban_topRight1} className="img-fluid" alt="..."/>
                                </div>
                            </div>
                            <div className='features-ban-animaton-inner-div-2'>
                                <div className='ban-bottom-left-div'>
                                <img src={f_ban_botLeft1} className="img-fluid" alt="..."/>
                                </div>
                                <div className='ban-bottom-right-div'>
                                <img src={f_ban_botRight1} className="img-fluid" alt="..."/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesBanner;
