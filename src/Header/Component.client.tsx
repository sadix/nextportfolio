'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  /*the ref*/
  const headerRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  //Sticky code for the header
  useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 250) { // Adjust this value as needed
            headerRef.current.classList.add('sticky');
          } else {
            headerRef.current.classList.remove('sticky');
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // 

  return (
    <header ref={headerRef} className="s-header   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="header-logo">
        <Link href="/" className='site-logo'>
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
      </div>
      <HeaderNav data={data} />
      
    </header>
  )
}
