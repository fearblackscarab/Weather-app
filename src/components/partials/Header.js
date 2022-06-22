import React from "react";

const Header = () => {
    return (
        <header className='header' id='header'>
            <div className="container">
                <div className="row">
                    <h1 className="logo col-3">Local Weather</h1>
                    <input type="search" className="col-6" placeholder="search"></input>
                </div>
            </div>
        </header>
    )
};

export default Header;