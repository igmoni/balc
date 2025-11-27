import Container from '@/components/common/Container'
import HeroOptions from '@/components/HeroOptions'
import Hero from '@/components/landing/Hero'
import React from 'react'

const page = () => {
  return (
    <Container >
      <Hero/>
      <HeroOptions/>
    </Container>
  )
}

export default page
