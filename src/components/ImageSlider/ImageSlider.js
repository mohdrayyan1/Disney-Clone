import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'

const ImageSlider = () => {

	const settings = {
		dots: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<>
			<div className="imageSlider">
				<Slider {...settings}>
					<div className="img-width">
						<img src="/images/slider-badag.jpg" alt="" />
					</div>
					<div className="img-width">
						<img src="/images/slider-badging.jpg" alt="" />
					</div>
					<div className="img-width">
						<img src="/images/slider-scale.jpg" alt="" />
					</div>
					<div className="img-width">
						<img src="/images/slider-scales.jpg" alt="" />
					</div>
				</Slider>
			</div>
		</>
	)
}

export default ImageSlider
