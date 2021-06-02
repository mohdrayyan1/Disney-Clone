/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Data from '../../data.json'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, selectNews, selectOriginal, selectRecommend, selectTrending } from '../../movieSlice'
import ImageSlider from '../ImageSlider/ImageSlider'
import Disney from '../Disney/Disney'
import Recommend from '../Recommend/Recommend'


const Home = () => {

	const dispatch = useDispatch()
	const recommend = useSelector(selectRecommend)
	const newDisney = useSelector(selectNews)
	const original = useSelector(selectOriginal)
	const trending = useSelector(selectTrending)

	let recommends = []
	let trendings = []
	let news = []
	let originals = []

	useEffect(() => {
		for (var key in Data) {
			// console.log(Data[key][1])
			for (var number in Data[key]) {
				// console.log(Data[key][number].type)
				switch (Data[key][number].type) {
					case "recommend":
						recommends = [...recommends, { id: number, ...Data[key][number] }]
						break;

					case "trending":
						trendings = [...trendings, { id: number, ...Data[key][number] }]
						break;

					case "new":
						news = [...news, { id: number, ...Data[key][number] }]
						break;

					case "original":
						originals = [...originals, { id: number, ...Data[key][number] }]
						break;

					default:
						console.log("No such case")
						break;
				}
			}
		}


		dispatch(
			addMovie({
				recommend: recommends,
				trending: trendings,
				news: news,
				original: originals
			})
		)


	}, [])



	return (
		<div className="home">
			<ImageSlider />
			<div className="disney">
				<Disney
					videoSrc="/videos/1564674844-disney.mp4"
					imageSrc="/images/viewers-disney.png"
				/>
				<Disney
					videoSrc="/videos/1564676115-marvel.mp4"
					imageSrc="/images/viewers-marvel.png"
				/>
				<Disney
					videoSrc="/videos/1564676296-national-geographic.mp4"
					imageSrc="/images/viewers-national.png"
				/>
				<Disney
					videoSrc="/videos/1564676714-pixar.mp4"
					imageSrc="/images/viewers-pixar.png"
				/>
				<Disney
					videoSrc="/videos/1608229455-star-wars.mp4"
					imageSrc="/images/viewers-starwars.png"
				/>
			</div>
			<div className="recommend">
				<h2>Recommend</h2>
				<div className="card__body">
					{recommend &&
						recommend.map((row, i) => (
							<Recommend
								id={row.id}
								cardImg={row.cardImg}
							/>
						))
					}
				</div>
			</div>
			<div class="newDisney">
				<h2>New to Disney+</h2>
				<div className="card__body">
					{newDisney &&
						newDisney.map((row, i) => (
							<Recommend
								id={row.id}
								cardImg={row.cardImg}
							/>
						))
					}
				</div>
			</div>
			<div class="original">
				<h2>Originals</h2>
				<div class="card__body">
					{original &&
						original.map((row, i) => (
							<Recommend
								id={row.id}
								cardImg={row.cardImg}
							/>
						))
					}
				</div>
			</div>
			<div class="trending">
				<h2>Trending</h2>
				<div class="card__body">
					{trending &&
						trending.map((row, i) => (
							<Recommend
								id={row.id}
								cardImg={row.cardImg}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Home
