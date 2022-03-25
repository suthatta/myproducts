import logo from "./logo.png";
import React  from 'react';
//const Header = (props) => (
const Header = ({subtitle}) => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md mt-5 subtitle">
            {subtitle}
        </div>
    </header>
);

export default Header;