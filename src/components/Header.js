import React, { useState } from "react";


const Header = () => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

    const loginButtonHandler = () => {
        setIsUserLoggedIn(!isUserLoggedIn)
    }


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.etsystatic.com/24095920/r/il/c2f0c1/3855548926/il_fullxfull.3855548926_99t3.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={loginButtonHandler}>{isUserLoggedIn ? "Logout" : "Login"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;