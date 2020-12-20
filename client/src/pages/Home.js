import React from 'react'
import { homeGridItems } from '../data'

import HomeGridItem from '../components/HomeGridItem'

const Home = () => {
	return (
		<section>
			<div className='container'>
				<div className='grid'>
					{homeGridItems.map((item) => <HomeGridItem key={item.title} {...item} />)}
				</div>
			</div>
		</section>
	)
}

export default Home
