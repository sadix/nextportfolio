import React from "react"
import { Fragment } from "react"



export const Intro = () => {
  

  return (
    <Fragment>
        <div className="row intro-content" >

            <div className="column large-9 mob-full intro-text">
                <h3>Hello, I&apos;m S. Saliou</h3>
                <h1>
                    Digital Architect <br />
                    and Web Developer <br />
                    Based In Dakar. <br />
                </h1>
            </div>

            <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                    Scroll For More
                </a>
            </div>

            <div className="intro-grid"></div>
            <div className="intro-pic"></div>

        </div> 
    </Fragment>
    
  )
}
