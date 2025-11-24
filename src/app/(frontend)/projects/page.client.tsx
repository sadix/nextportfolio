'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import RichText from '@/components/RichText'
import Image from 'next/image';

const PageClient: React.FC<{
  content?: any
  projectType?: string
  imgUrl:string
  title?: string
}> = (props) =>  {
  const [isOpen, setIsOpen] = useState(false);

      const openDialog = () => setIsOpen(true);
      const closeDialog = () => setIsOpen(false);

    const { title, content, projectType,imgUrl } = props


    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }


  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
      }

      const event = new Event('rendered');
      window.dispatchEvent(event);

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);

      
  }, []);

  



 
  return (
    <>
    <a  className="thumb-link" title={title} data-size="1050x700" onClick={openDialog}>
                                              {/* <img src={imgUrl}
                                     srcSet={imgUrl} alt="" />  */}
                                    <Image src={imgUrl}  alt='' width={200} height={600}></Image>

    </a>
    {isOpen && (
    <div aria-hidden="false" className="pswp pswp--supports-fs pswp--open pswp--animate_opacity pswp--notouch pswp--css_animation pswp--svg pswp--zoom-allowed pswp--visible pswp--animated-in pswp--has_mouse" role="dialog" tabIndex={-1} style={{position: "fixed", opacity: 1}}>

        <div className="pswp__bg" style={{opacity: 1}} ></div>
        <div className="pswp__scroll-wrap">

            <div className="pswp__container">
                <div className="pswp__item">
                   <div className="pswp__zoom-wrap" style={{transform: " scale(1)" }}>
                        {/* <img className="pswp__img" src={imgUrl}  style={{opacity: 1 ,  height: "90%" , display: "block", margin:"0 auto", position:"relative"}} /> */}
                        <Image src={imgUrl} className='pswp__img' style={{opacity: 1 ,  height: "90%" , display: "block", margin:"0 auto", position:"relative"}} width={1000} height={4000} alt=''></Image>
                    </div>
                </div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui pswp__ui--fit pswp__ui--over-close ">
                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)" onClick={closeDialog}></button>  <button className="pswp__button pswp__button--zoom" title=
                    "Zoom in/out"></button>
                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                                <div className="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                "Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center">
                        <h4>{title} - {projectType}</h4>
                        <p><RichText data={content} enableGutter={false} /></p>
                    </div>
                </div>
            </div>

        </div>

    </div>)}
    </>
  )

        
}

export default PageClient
