import RichText from '@/components/RichText'
import { RichTextFieldClientProps } from 'payload'
import React from 'react'


type Props = {
    button_text?: string
    title?:string
    content?:any
    
}


export const IntroSectionBlock: React.FC<Props> = ({ title ,content, button_text}) => {
  return (
    <section id="intro" className="s-intro target-section">
         <div className="row intro-content" >

            <div className="column large-9 mob-full intro-text">
                <h3>{title}</h3>
                <h1>
                    <RichText data={content} enableGutter={false} />
                </h1>
            </div>

            <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                    {button_text}
                </a>
            </div>

            <div className="intro-grid"></div>
            <div className="intro-pic"></div>

        </div> 
        
    </section> 
  )
}
