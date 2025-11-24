// payload/blocks/SectionBlock.ts
import { Block } from "payload";
import { DivBlock } from "../DivBlock/config";
import { defaultEditorFeatures, FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { features } from "process";

export const IntroSectionBlock: Block = {
  slug: "intro_section",
  labels: {
    singular: "Intro Section",
    plural: "Intro Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "title",
      required: false,
    },
    {
      name:"content",
      type: "richText",
      editor: lexicalEditor({
        features:( {defaultFeatures}) => [
         ...defaultFeatures,
         FixedToolbarFeature() 
        ]
      }),
    },
    {
      name: "button_text",
      type: "text",
      label: "Button text",
      required: false,
    },
    
  ],
}; 
