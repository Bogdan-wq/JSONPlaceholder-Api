import React from 'react';
import './topbar.scss';

const TopBar = () => {
    return (
        <div className="main-app__topbar topbar">
            <div className="container">
                <div className="topbar__inner">
                    <div className="topbar__search">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <button className="topbar__addbutton">Add</button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;