import Container from '@/components/common/Container'
import React from 'react'
import Hero from '@/components/common/Hero'
import ContactUs from '@/components/contact/ContactUs'

const page = () => {
  return (
    <Container className={"px-5"}>
        <Hero title={"Contact Us"}/>
        <ContactUs />
    </Container>
)
}

export default page