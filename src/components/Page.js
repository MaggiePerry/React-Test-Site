import React from "react";
import { Header } from "./Header"
import { Table } from "./Table"
import { Footer } from "./Footer"

export function Page () {
    return (
        <main className="main">
            <Header />
            <div className="bar"></div>
            
            <article className="article">
                <div className="article__title">
                    <h1> Maggies React Test Site </h1>
                </div>
                <div className="article-wrapper">
                    <p> This is a site I'm using to learn more about react! Lets see what cool stuff I can learn to make.</p>
                    <hr></hr>
                    <Table />
                </div>
            </article>

            <div className="bar"></div>
            <Footer />

        </main>
    );

}