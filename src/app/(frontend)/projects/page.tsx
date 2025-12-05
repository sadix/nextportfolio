import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import RichText from '@/components/RichText'

import PageClient from './page.client'
import Script from 'next/script'


export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const worksDocs = await payload.find({
    collection: 'works',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      link: true,
      image: true,
      project_type:true,
      content:true,
    },
  })

  //console.log(worksDocs)
 
  const works =  worksDocs.docs 

  
  
  return (
    <section id="works" className="s-works target-section">

        <div className="row heading-block heading-block--center" data-aos="fade-up">
            <div className="column large-full">
                <h2 className="section-heading section-heading--centerbottom">Selected Works</h2>
                <p className="section-desc">
                    Here are some of my selected works I have done lately. Feel free to 
                    check them out.
                </p>
            </div>
        </div> 

        <div className="masonry-wrap">

            <div className="masonry"  >
                <div className="grid-sizer"></div>
    
                 

                  {works?.map((work, index) => {
                      if (typeof work === 'object') {
                          const { title,link,image,project_type,content } = work

                          const img_url = (image && typeof image !== 'string' )?image.url ?? '/placeholder.jpg':"";
                          
                          return (
                              <div className="masonry__brick" data-aos="fade-up" key={index}>
                                  <div className="item-folio">
                                      <div className="item-folio__thumb">
                                          <PageClient title={title} imgUrl={img_url} content={content}/>
                                       <a href={link!} className="item-folio__project-link" title="Project link" target="_blank"></a>
                                      </div>

                                      <div className="item-folio__text">
                                          <h4 className="item-folio__title">
                                              {title}
                                          </h4>
                                          <p className="item-folio__cat">
                                              {project_type}
                                          </p>
                                      </div>

                                      <div className="item-folio__caption">
                                          <p><RichText data={content} enableGutter={false} /></p>
                                      </div>
                                  </div>
                              </div> 
                              
                          )
                      }

                      return null
                  })}
                
               

            </div> 

        </div> 
     
    </section> 
  )
}

//export const dynamic = "force-dynamic";


