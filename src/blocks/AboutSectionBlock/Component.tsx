import RichText from '@/components/RichText'
import { RichTextFieldClientProps } from 'payload'
import React from 'react'


type Props = {
    button_text?: string
    title?:string
    content?:any
    
}


export const AboutSectionBlock: React.FC<Props> = ({ title ,content, button_text}) => {
  return (
    <section id="about" className="s-about target-section">

        <div className="about-me">

            <div className="row heading-block" data-aos="fade-up">
                <div className="column large-full">
                    <h2 className="section-heading">{title}</h2>
                </div>
            </div>

            <div className="row about-me__content" data-aos="fade-up">
                <div className="column large-full about-me__text">
                    <RichText data={content} enableGutter={false} />
                      <div className="column  tab-full">

                          <h3>My Skills </h3>

                          <ul className="skill-bars">
                              <li>
                                  <div className="progress percent90"><span>90%</span></div>
                                  <strong>Drupal</strong>
                              </li>
                              <li>
                                  <div className="progress percent85"><span>85%</span></div>
                                  <strong>Django</strong>
                              </li>
                              <li>
                                  <div className="progress percent70"><span>70%</span></div>
                                  <strong>Flutter</strong>
                              </li>
                              <li>
                                  <div className="progress percent95"><span>95%</span></div>
                                  <strong>NextJs/React</strong>
                              </li>
                              <li>
                                  <div className="progress percent75"><span>75%</span></div>
                                  <strong>Docker</strong>
                              </li>
                              <li>
                                  <div className="progress percent90"><span>90%</span></div>
                                  <strong>SEO</strong>
                              </li>
                              <li>
                                  <div className="progress percent90"><span>90%</span></div>
                                  <strong>AI/Automation</strong>
                              </li>
                          </ul>

                      </div>
                </div>
            </div>
    
            <div className="row about-me__buttons">
                <div className="column large-half tab-full" data-aos="fade-up">
                    <a href="#0" className="btn btn--stroke full-width">{button_text}</a>
                </div>
                <div className="column large-half tab-full" data-aos="fade-up">
                    <a href="#0" className="btn btn--primary full-width">Download CV</a>
                </div>
            </div>

        </div> 
    </section>
  )
}
