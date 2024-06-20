import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className='banner-layout'>
            <div className='container banner-top-con'>
                <div className='row'>
                    <div className='col'>
                        <span className='banner-back-text-span'>Lorem ipsum is place </span>
                    </div>
                </div>
            </div>
            <div className='container banner-bottom-con'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <span className='banner-left-div-span'>
                            Lorem ipsum is place <br /> holder <span className='banner-left-div-inner-span'>text commonly</span>
                        </span><br />
                        <span className='banner-sub-text'>Lorem ipsum is place holder text commonly </span>
                        {/*   <div className='mt-4 border banner-btn-container'></div> */}
                        <div className="inner_wrap">
                            <span className="border_btm"></span>
                            <button className="pushable">
                                <span className="front">
                                    Send
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
