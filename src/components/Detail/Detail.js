/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router'
import Data from '../../data.json'

const Detail = () => {

	const { id } = useParams()
	const [data, setData] = useState({})

	useEffect(() => {
		for (var key in Data) {
			for (var number in Data[key]) {
				if (id === number) {
					setData(Data[key][number])
					return
				}
			}
		}
		console.log("no such data in json")
	}, [id])

	return (
		<>
			<div class="detail">
				<div style={{ backgroundImage: "url(" + data.backgroundImg + ")" }} class="detail__background"></div>
				<div class="detail__body">
					<div class="detail__logo">
						<img src={data.titleImg} alt="" />
					</div>
					<div class="detail__content">
						<div>
							<a href="#">
								<i class="fas fa-play"></i>
								Play
							</a>
						</div>
						<div>
							<a href="#">
								<i class="fas fa-play"></i>
								Trailer
							</a>
						</div>
					</div>
					<div class="detail__description">
						<p>{data.subTitle}</p>
						<p>{data.description}</p>
					</div>
				</div>
			</div>

		</>
	)
}

export default Detail
