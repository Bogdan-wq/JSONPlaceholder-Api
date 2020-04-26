import React,{Fragment} from 'react';
import './header.scss';
import headerBackground from "../../images/background-header.jpg";



const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__background">
                        <img src={headerBackground} />
                    </div>
                    <div className="header__content">
                        <div className="container">
                            <div className="header__inner">
                                <h1 className="header__title">Welcome to Fake JSON Api Renderer</h1>
                                <div className="header__info">
                                    <span>Author: Nikituk Bogdan</span>
                                    <span>Implemented with <strong>React.js</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="parallax">
            </div>
        </Fragment>

    )
}

export default Header;