
import React from 'react'

import Script from 'next/script'




export default async function Layout({ children }: { children: React.ReactNode }) {
 

  return (
     <>
      {children}
      <div className='test'></div>
      <Script src="js/initMansory.js" strategy='afterInteractive' ></Script>
     </>
  )
}

