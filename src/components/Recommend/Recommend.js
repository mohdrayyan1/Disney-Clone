/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import './Recommend.css'

const Recommend = (props) => {
	return (
		<>
			<Link to={"/detail/" + props.id}>
				<div className="card">
					<img src={props.cardImg} alt="" />
				</div>
			</Link>
		</>
	)
}

export default Recommend
