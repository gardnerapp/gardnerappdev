import React from "react"
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types"
class Personal extends React.Component {
  render () {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="assets/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3/>
                        <p/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="assets/chris-ried-ieic5Tq8YMk-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3/>
                        <p/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="assets/maxwell-nelson-taiuG8CPKAQ-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3/>
                        <p/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default Personal
