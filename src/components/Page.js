import React from "react";
import { Header } from "./Header"
import { Table } from "./Table"
import { Footer } from "./Footer"

export function Page () {
    return (
        <div>
            <Header />
            
            <article className="article">
                <h1> React Test Site </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus suscipit ex, efficitur ullamcorper mauris scelerisque quis. Maecenas venenatis ex felis, vitae pharetra neque tristique non. Ut in nisi orci. Sed congue consectetur justo, vitae semper turpis commodo quis. Nulla varius venenatis nisi sed porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce posuere condimentum nisi sed faucibus. Fusce a nibh convallis, hendrerit mauris in, accumsan leo. Ut suscipit a mi pellentesque porttitor. Morbi et ligula ac ligula hendrerit aliquam ac feugiat nisi. Phasellus quam enim, malesuada vitae aliquet vitae, molestie ut nulla. Phasellus dapibus ipsum lorem. Duis tempor urna a dolor pellentesque tempor.</p>

                <hr></hr>

                <Table />

            </article>

            <Footer />

        </div>
    );

}