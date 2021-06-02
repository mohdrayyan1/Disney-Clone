/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css'
import Disney from '../../images/disney-white.svg'
import { auth, provider } from '../../firebase'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, selectName } from '../../userSlice'
import { useHistory } from 'react-router'

const Header = () => {

	const history = useHistory()
	const dispatch = useDispatch()
	const name = useSelector(selectName)

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user)
				history.push('/home')
			}
		})
	},[name])

	const handleSubmit = () => {
		if (!name) {
			auth.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user)
				})
				.catch((error) => {
					console.log(error.message)
				})
		} else if (name) {
			auth.signOut()
				.then(() => {
					dispatch(removeUser())
				})
				.catch((error) => {
					console.log(error.message)
				})
		}

	}

	const setUser = (user) => {
		dispatch(
			addUser({
				name: user.displayName,
				email: user.email
			})
		)
	}


	return (
		<>
			<div className="header">
				<div className="header__navbar">
					<img src={Disney} alt="Disney+" />

					<div className="header__nav">
						{name &&
							<>
								<a>
									<i className="fas fa-home"></i>
									<span>Home</span>
								</a>
								<a>
									<i className="fas fa-search"></i>
									<span>Search</span>
								</a>
								<a>
									<i className="fas fa-plus"></i>
									<span>Watchlist</span>
								</a>
								<a>
									<i className="fas fa-video"></i>
									<span>Movies</span>
								</a>
								<a>
									<i className="far fa-clock"></i>
									<span>Original</span>
								</a>
							</>
						}
					</div>

					<div className="header__loginButton">
						{!name ? (
							<a onClick={handleSubmit} className="header__login">Login</a>
						) : (
							<>
								{/* <span style={{marginRight:"40px"}}>Weclome , {name} </span> */}
								<a onClick={handleSubmit} className="header__login">Logout</a>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
