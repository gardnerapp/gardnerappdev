import React from "react"
import Carousel from "react-bootstrap/Carousel";


class Personal extends React.Component {
  render () {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                  <img src='assets/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg' className="d-block w-100 carousel-img"
                  alt="first"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="assets/chris-ried-ieic5Tq8YMk-unsplash.jpg" className="d-block w-100 carousel-img"
                         alt="second"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="assets/maxwell-nelson-taiuG8CPKAQ-unsplash.jpg" className="d-block w-100 carousel-img"
                    alt="third" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default Personal
