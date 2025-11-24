'use client'

import React, { useEffect, useState, useRef, MouseEventHandler }from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Mouse } from 'playwright-core'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleButtonRef = useRef(null);
  const navRef = useRef(null);


  // Check if toggle button is visible on component mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            if (toggleButtonRef.current) {
                const isVisible = window.getComputedStyle(toggleButtonRef.current).display !== 'none';
                setIsMobile(isVisible);
            }
        };

        // Initial check
        checkMobile();

        // Add resize event listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleToggleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

  return (
    <>
    <nav ref={navRef}
                className={`header-nav-wrap ${isMobile ? 'mobile' : ''}`}
                style={{
                    display: isMenuOpen ? 'block' : 'none'
                }}>
      <ul className='header-main-nav'>
        {navItems.map(({ link }, i) => {
        return <li key={i} ><CMSLink  {...link} appearance="link" /> </li>
      })}

      </ul>
      
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
    </nav>
    <a ref={toggleButtonRef}
                className={`header-menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`}
                onClick={handleToggleClick}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen} href="#"><span>Menu</span></a>
    </>
  )
}
