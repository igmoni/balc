'use client'
import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useMotionValueEvent, useScroll, useTransform, motion, AnimatePresence } from 'motion/react'
import { Button } from '../ui/button'
import { useMediaQuery } from "@uidotdev/usehooks";


const Navbar = () => {

  const navItems = [
    { title: "Courses", href: "/courses" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
    { title: "Careers", href: "/careers" },
  ];

  const isClient = typeof window !== "undefined";
  const isMobile = isClient ? window.innerWidth < 768 : false;



  const [hover, setHover] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const { scrollY } = useScroll()

  const [scrolled, setScrolled] = useState(false)

  const widthDesk = useTransform(scrollY, [0, 50, 100], ['100%', '80%', '60%'])

  const widthMob = useTransform(scrollY, [0, 100], ['100%', '90%'])

  const y = useTransform(scrollY, [0, 100], [0, 10])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 25) setScrolled(true)
    else setScrolled(false)
  })

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const [activeMobile, setActiveMobile] = useState(null);


  return (
    <div className=''>
      <motion.nav style={{ width: isMobile ? widthMob : widthDesk, y, boxShadow: scrolled ? 'var(--shadow-acternity)' : 'none' }} transition={{ duration: 0.3, ease: 'easeInOut' }} className={`w-full shadow-acternity bg-white fixed top-0 inset-x-0 h-16 z-50 max-w-7xl mx-auto flex items-center justify-between px-6 py-2 rounded-full `}>

        <div className='w-full flex justify-between items-center'>
          <Link href={'/'} onClick={() => setIsOpen(false)}>
            <Image src={'/assets/balc.jpg'} width={isMobile ? 100 : 110} height={isMobile ? 100 : 110} alt='BALC' className=' rounded-md' />
          </Link>

          <div className='hidden md:flex rounded-md items-center'>
            {navItems.map((item, idx) => (
              <Link href={item.href} key={item.title}
                className='text-sm relative px-2 py-1' onMouseEnter={() => setHover(idx)} onMouseLeave={() => setHover(null)} onClick={() => setIsOpen(false)}>
                {hover === idx && (
                  <motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 '></motion.span>
                )}
                <span className='text-primary text-base relative z-10 '>{item.title}</span>
              </Link>
            ))}
          </div>

          <Button variant={'outline'} className={'md:hidden text-primary text-base focus:outline-none'} onClick={toggleMenu} aria-label='Toggle Menu'>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Navigation       */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed top-20 right-2 min-w-[150px] rounded-xl bg-white shadow-acternity md:hidden z-999"
            initial={{ x: 100, opacity: 0, filter: 'blur(10px)' }}
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ x: 100, opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col px-5 gap-5 py-3">
              {navItems.map((item, idx) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="text-base relative px-2 py-1"
                  onClick={() => {
                    setActiveMobile(idx)
                    setIsOpen(false)
                  }}
                >
                  {activeMobile === idx && (
                    <motion.span
                      layoutId="focused-span"
                      className="h-full w-full absolute inset-0 rounded-md bg-neutral-100"
                    ></motion.span>
                  )}
                  <span className="text-primary text-base relative z-10">{item.title}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Navbar
