import React from "react";

export function Page () {
    return (
        <div>
            <header className="header">
                <a href="#default" className="logo">React</a>
                <div className="header-menu">     
                    <a className="active" href="#page1">Research</a>
                    <a href="#page2">Pros & Cons</a>
                    <a href="#page3">Performance</a>
                    <a href="#page4">About</a>
                </div>
            </header>
            
            <article className="article">
            <h1> React Test Site </h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus suscipit ex, efficitur ullamcorper mauris scelerisque quis. Maecenas venenatis ex felis, vitae pharetra neque tristique non. Ut in nisi orci. Sed congue consectetur justo, vitae semper turpis commodo quis. Nulla varius venenatis nisi sed porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce posuere condimentum nisi sed faucibus. Fusce a nibh convallis, hendrerit mauris in, accumsan leo. Ut suscipit a mi pellentesque porttitor. Morbi et ligula ac ligula hendrerit aliquam ac feugiat nisi. Phasellus quam enim, malesuada vitae aliquet vitae, molestie ut nulla. Phasellus dapibus ipsum lorem. Duis tempor urna a dolor pellentesque tempor.</p>

            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th>Pros</th>
                            <th>Cons</th>
                        </tr>
                        <tr>
                            <td>Good</td>
                            <td>Bad</td>
                        </tr>
                        <tr>
                            <td>Good</td>
                            <td>Bad</td>
                        </tr>
                    </tbody>
            </table>
            </div>

            <div class="slideshow-container">
                <div class="mySlides fade">
                    <div class="numbertext">1 / 3</div>
                    <img src="img1.jpg"/>
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">2 / 3</div>
                    <img src="img2.jpg"/>
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <div class="numbertext">3 / 3</div>
                    <img src="img3.jpg"/>
                    <div class="text">Caption Three</div>
                </div>

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <br></br>

            <div>
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            </div>

            </article>

            <footer className="footer">
                <h3></h3>
                <div className="footer-menu">     
                    <a className="active" href="#page1">Research</a>
                    <a className="active" href="#page2">Pros & Cons</a>
                    <a className="active" href="#page3">Performance</a>
                    <a className="active" href="#page4">About</a>
                </div>
                <p>Copyright © 2020 Maggie Perry</p>
            </footer>
            
        </div>

    );

}