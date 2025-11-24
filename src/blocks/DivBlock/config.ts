// payload/blocks/DivBlock.ts
import { Block } from "payload";

export const DivBlock: Block = {
  slug: "div",
  labels: {
    singular: "Div",
    plural: "Divs",
  },
  fields: [
    {
      name: "className",
      type: "text",
      label: "Classes CSS",
      required: false,
    },
    {
      name: "children",
      type: "blocks",
      label: "Contenu",
      blocks: [], // pour l’instant vide, on liera plus tard
    },
  ],
};
