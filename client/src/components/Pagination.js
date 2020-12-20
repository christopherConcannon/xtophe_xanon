import React from 'react'
import { Link } from 'react-router-dom'
import CaretLeft from './CaretLeft'
import CaretRight from './CaretRight'

const Pagination = ({
	direx = '',
	lPage = '',
	rPage = ''
}) => {
	return (
		<section className={`pagination container ${direx}`}>
			{lPage !== '' ? (
				<Link to={`/${lPage}`}>
					<CaretLeft />
					<h2>{lPage}</h2>
				</Link>
			) : null}
			{rPage !== '' ? (
				<Link to={rPage}>
					<h2>{rPage}</h2>
					<CaretRight />
				</Link>
			) : null}
		</section>
	)
}

export default Pagination
