import RichText from '@/components/RichText'
import { RichTextFieldClientProps } from 'payload'
import React from 'react'


type Props = {
    cssclass?: string
    title?:string
    content?:any
    
}


export const SectionBlock: React.FC<Props> = ({ cssclass, title , content}) => {
  return (
    <section id={title} className={cssclass}>
        <RichText data={content} enableGutter={false} />
    </section> 
  )
}
