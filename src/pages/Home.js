import React from 'react'
import HeroPage from '../components/HeroPage'
import Quote from '../components/Quote'
import IntroResto from '../components/IntroResto'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <HeroPage />
      <Quote />
      <IntroResto/>
      <NewsLetter/>
    </>
  )
}

export default Home