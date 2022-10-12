import React from 'react'
import BrandLink from '../elements/BrandLink'
import Cards from '../elements/Cards'
import Hero from '../elements/Hero'
import Brands from '../elements/Brands'
import HowToWork from '../elements/HowToWork'
import TokenDistribution from '../elements/TokenDistribution'
import Plateform from '../elements/Plateform'
import Utilities from '../elements/Utilities'
import ComparisionTable from '../elements/ComparisionTable'
import RoadMap from '../elements/RoadMap'
import Faqs from '../untils/Faqs'

const Home = () => {
  return (
  <>
    <Hero />
    <BrandLink />
    <Cards />
    <Brands />
    <HowToWork />
    <TokenDistribution />
    <Plateform />
    <Utilities />
    <ComparisionTable />
    <RoadMap />
    <Faqs />
    </>
  )
}

export default Home