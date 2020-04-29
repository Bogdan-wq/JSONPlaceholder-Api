import React,{Fragment} from 'react';
import './header.scss';
import headerBackground from "../../images/background-header.jpg";



const Header = () => {
    return (
        <Fragment>
            <header className="header position-fixed">
                <div className="header__wrapper position-relative text-white">
                    <div className="header__background position-absolute">
                        <img src={headerBackground} className="w-100 h-100" />
                    </div>
                    <div className="header__content">
                        <div className="container-xl">
                            <div className="header__inner position-relative text-center">
                                <h1 className="display-4">Welcome to Fake JSON Api Renderer</h1>
                                <div className="header__info d-flex flex-column">
                                    <span>Author: Nikituk Bogdan</span>
                                    <span className="mt-2">Implemented with <strong>React.js</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="parallax position-relative bg-transparent">
            </div>
        </Fragment>

    )
}

export default Header;