// payload/blocks/SectionBlock.ts
import { Block } from "payload";
import { DivBlock } from "../DivBlock/config";
import { defaultEditorFeatures, FixedToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { features } from "process";

export const SectionBlock: Block = {
  slug: "section",
  labels: {
    singular: "Section",
    plural: "Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titre",
      required: false,
    },
    {
      name: "cssclass",
      type: "text",
      label: "Class css",
      required: false,
    },
    {
      name: "background",
      type: "select",
      label: "Couleur de fond",
      options: [
        { label: "Blanc", value: "white" },
        { label: "Gris clair", value: "lightGray" },
        { label: "Vert", value: "green" },
      ],
      defaultValue: "white",
    },
    {
      name: "padding",
      type: "select",
      label: "Marge interne",
      options: [
        { label: "Petite", value: "small" },
        { label: "Moyenne", value: "medium" },
        { label: "Grande", value: "large" },
      ],
      defaultValue: "medium",
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
    
  ],
}; 
