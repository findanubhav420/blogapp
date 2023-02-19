import React from "react";
import "./header.css";
function Header() {
    return (
        <div class="navbar">
            <div class="title">
                <h1>The Artifact</h1>
            </div>
            <div class="sub-title">
                <h3>Culture & Art Blog</h3>
            </div>
            <div class="nav-options">
                <ul class="nav-links">
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;