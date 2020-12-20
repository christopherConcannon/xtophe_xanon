import React from 'react'
import { Link } from 'react-router-dom'
import CaretLeft from './CaretLeft'
import CaretRight from './CaretRight'

const Pagination = ({direx, rPage}) => {
  const { to, title } = rPage
  return (
    <section className={`pagination container ${direx}`}>
    <Link to={to}>
      <h2>{title}</h2>
      <CaretRight />
    </Link>
  </section>
  )
}

export default Pagination
