import React from "react";

export function Header() {
    return (
        <header className="header">
            <a href="#default" className="logo">React</a>
            <div className="header-menu">     
                <a className="active" href="#page1">Research</a>
                <a href="#page2">Pros & Cons</a>
                <a href="#page3">Performance</a>
                <a href="#page4">About</a>
            </div>
        </header>
    );
}