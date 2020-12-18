import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<section>
			<div className='container'>
				<div className='grid'>
					<div className='grid-item'>
						<Link to='/bistrot'>
							<img src='images/boucher-home.jpg' className='rsp-image' alt='boucher' />
							<div className='grid-item-overlay'>
								<div className='grid-item-text'>
									<h2>bistrot</h2>
								</div>
							</div>
						</Link>
					</div>
					<div className='grid-item'>
						<a href='quixote.html'>
							<img src='images/quixote-home.jpg' className='rsp-image' alt='quixote' />
							<div className='grid-item-overlay'>
								<div className='grid-item-text'>
									<h2>Quixote</h2>
								</div>
							</div>
						</a>
					</div>
					<div className='grid-item'>
						<a href='myco.html'>
							<img src='images/myco-1-home.jpg' className='rsp-image' alt='myco' />
							<div className='grid-item-overlay'>
								<div className='grid-item-text'>
									<h2>Myco</h2>
								</div>
							</div>
						</a>
					</div>
					<div className='grid-item'>
						<a href='eclectica.html'>
							<img src='images/walrus-home.jpg' className='rsp-image' alt='walrus' />
							<div className='grid-item-overlay'>
								<div className='grid-item-text'>
									<h2>Eclectica</h2>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
