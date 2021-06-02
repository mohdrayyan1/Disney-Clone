/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Login.css'
import LogoOne from '../../images/cta-logo-one.svg'
import LogoTwo from '../../images/cta-logo-two.png'
import { useSelector } from 'react-redux'
import { selectRecommend } from '../../movieSlice'

const Login = () => {

	const recommend = useSelector(selectRecommend)

	return (
		<>
			{console.log(recommend)}
			<div className="login__background"></div>
			<div className="login">
				<div className="login__content">
					<img src={LogoOne} alt="" />
					<div className="login__body">
						<a>get all here</a>
						<p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
					</div>
					<img src={LogoTwo} alt="" />
				</div>
			</div>

		</>
	)
}

export default Login
