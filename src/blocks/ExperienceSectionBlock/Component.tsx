import RichText from '@/components/RichText'
import { RichTextFieldClientProps } from 'payload'
import React from 'react'


type Props = {
    button_text?: string
    title?:string
    content?:any
    
}


export const ExperienceSectionBlock: React.FC<Props> = ({ title ,content, button_text}) => {
  return (
    <section id="about" className="s-about target-section">
     <div className="about-experience">

            <div className="row heading-block" data-aos="fade-up">
                <div className="column large-full">
                    <h2 className="section-heading">Work & Education</h2>
                </div>
            </div>

            <div className="row about-experience__timeline">

                <div className="column large-half tab-full" data-aos="fade-up">
                    <div className="timeline">

                        <div className="timeline__icon-wrap">
                            <span className="timeline__icon timeline__icon--work"></span>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2023 - Present</p>
                                <h3 className="item-title">Freelance</h3>
                                <h5>Web/mobile developper</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>I&apos;ve been making awesome apps and beautiful websites! Go check my latest work .</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">May 2021 - July 2023</p>
                                <h3 className="item-title">DIGISSOL </h3>
                                <h5>Lead Developer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>I lead a team of 5 junior + 1 senior and we made web platforms used by thousands of users for several NGOs.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">March 2017 - June 2019</p>
                                <h3 className="item-title">IT CONSULTING</h3>
                                <h5>Lead Developer</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>I was building the Company&apos;s Management System using Open Source technologies while building websites for our clients.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="column large-half tab-full" data-aos="fade-up">
                    <div className="timeline">

                        <div className="timeline__icon-wrap">
                            <span className="timeline__icon timeline__icon--education"></span>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2012 - June 2014</p>
                                <h3 className="item-title">University Cheikh Anta Diop </h3>
                                <h5>Master Degree</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>My speciality was about Distributed Systems.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2011 - June 2012</p>
                                <h3 className="item-title">University Cheikh Anta Diop</h3>
                                <h5>Bachelor Degree</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>A continuity of my degree in Information technology Management.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <p className="timeline__timeframe">July 2009 - June 2011</p>
                                <h3 className="item-title">University Cheikh Anta Diop</h3>
                                <h5>Software Engineering Technician</h5>
                            </div>
                            <div className="timeline__desc">
                                <p>Degree in Information Technology Management obtained from the ESP ( Ecole Supérieure Polytechnique)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </section> 
  )
}
