import React from "react";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-menu">     
                <a className="active" href="#Research">Research</a>
                <a className="active" href="#Pros&Cons">Pros & Cons</a>
                <a className="active" href="#Performance">Performance</a>
                <a className="active" href="#About">About</a>
            </div>
            <p>Copyright © 2020 Maggie Perry</p>
        </footer>
    );
}