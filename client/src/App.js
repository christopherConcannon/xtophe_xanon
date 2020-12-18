import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bistrot from './pages/Bistrot'

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path='/bistrot' component={Bistrot} />
			<Route exact path='/' component={Home} />
			<Footer />
		</Router>
	)
}

export default App
