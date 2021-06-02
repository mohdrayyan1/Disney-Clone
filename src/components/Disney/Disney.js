import React from 'react'
import './Disney.css'

const Disney = (props) => {
	return (
		<div className="disney__card ">
			<img className="disney__image" src={props.imageSrc} alt="" />
			<video width="100%" height="100%" autoPlay={true} muted loop>
				<source src={props.videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
			</video>

		</div>

	)
}

export default Disney
