import Container from '@/components/common/Container'
import EnquiryForm from '@/components/common/EnquiryForm'
import FAQ from '@/components/common/FAQ'
import BlogSection from '@/components/landing/BlogSection'
import CoursesSection from '@/components/landing/CoursesSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import Hero from '@/components/landing/Hero'
import HowItWorksSection from '@/components/landing/HowItWorks'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const page = () => {
  return (
    <Container >
      <Hero/>
      <CoursesSection/> 
      {/* Should change the above  */}
      <Testimonials/>
      {/* Add 3 more testimonials and change the bakground and styling with animations */}
      <HowItWorksSection/>
      <FeaturesSection/>
      <EnquiryForm/>
      <FAQ/>
      <BlogSection/>
    </Container>
  )
}

export default page
