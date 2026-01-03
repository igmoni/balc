import Container from '@/components/common/Container'
import EnquiryForm from '@/components/common/EnquiryForm'
import FAQ from '@/components/common/FAQ'
import BlogSection from '@/components/landing/BlogSection'
import CoursesSection from '@/components/landing/CoursesSection'
import { getAllBlogs } from '@/lib/blogs'
import { getAllCourses } from '@/lib/courses'
import FeaturesSection from '@/components/landing/FeaturesSection'
import Hero from '@/components/landing/Hero'
import HowItWorksSection from '@/components/landing/HowItWorks'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const page = async () => {
  const blogs = await getAllBlogs();
  const courses = await getAllCourses();

  const recentBlogs = blogs.slice(0, 3);
  const popularCourses = courses.slice(0, 6); // Display first 6 courses

  return (
    <Container >
      <Hero />
      <CoursesSection courses={popularCourses} />
      {/* Should change the above  */}
      <Testimonials />
      {/* Add 3 more testimonials and change the bakground and styling with animations */}
      <HowItWorksSection />
      <FeaturesSection />
      <EnquiryForm />
      <FAQ />
      <BlogSection blogs={recentBlogs} />
    </Container>
  )
}

export default page
