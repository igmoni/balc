import React from 'react'
import Gallery from '@/components/common/Gallery'
import Container from '@/components/common/Container'
import Hero from '@/components/common/Hero'

const page = () => {
  return (
    <Container className={" px-5"}>
      <Hero title={"Gallery"}/>
      <Gallery />
    </Container>
  )
}

export default page
