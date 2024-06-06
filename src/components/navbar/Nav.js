import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import './nav.css';
import { navLogo } from '../../assets/image';

const Nav = () => {

    const [close, setClose] = useState(false);

    /* const handleClick = () => {
        setClose(!close)
    } */

    return (
        <div>
            <nav className='nav-style'>
                <div className="container-fluid">
                    <div className="nav-dis">
                        <div className="tittle-con">
                            <a href="/">
                                <div className='nav-logo-style'>
                                    <img src={navLogo} alt="..." className="img-thumbnail nav-img" />
                                </div>
                            </a>
                        </div>
                        <div className="links-con">
                            <ul className={close ? "slider" : "ul-style"}>
                                <li className='li-style li-one'><a href='#' /* onClick={handleClick} */ className='a-style'>
                                    <span className="mask">
                                        <div className="link-container">
                                            <span className="link-title1 title">About us</span>
                                            <span className="link-title2 title">READ MORE</span>
                                        </div>
                                    </span>
                                </a></li>
                                <li className='li-style'><a href='#' /* onClick={handleClick} */ className='a-style'>
                                    <span className="mask">
                                        <div className="link-container">
                                            <span className="link-title1 title">READ MORE</span>
                                            <span className="link-title2 title">READ MORE</span>
                                        </div>
                                    </span>
                                </a></li>
                                <li className='li-style'><a href='#' /* onClick={handleClick} */ className='a-style'>
                                    <span className="mask">
                                        <div className="link-container">
                                            <span className="link-title1 title">READ MORE</span>
                                            <span className="link-title2 title">READ MORE</span>
                                        </div>
                                    </span>
                                </a></li>
                                {/*  <Button/> */}
                                <div className="cross-mark" /* onClick={handleClick} */>
                                    <FaXmark />
                                </div>
                            </ul>
                            <div className="humberger" /* onClick={handleClick} */>
                                <FaBars />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
