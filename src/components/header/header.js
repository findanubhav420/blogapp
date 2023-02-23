import React from "react";
import "./header.css";
function Header() {
    return (
        <div className="navbar" data-testid="header">
            <div className="title">
                <h1>The Artifact</h1>
            </div>
            <div className="sub-title">
                <h3>Culture & Art Blog</h3>
            </div>
            <div className="nav-options">
                <ul className="nav-links">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;