import type { CollectionConfig } from 'payload'

import { link } from '@/fields/link'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { anyone } from '../../access/anyone'

import { slugField } from '@/fields/slug'

export const Works: CollectionConfig<'works'> = {
    slug: 'works',
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },
    defaultPopulate: {
        title: true,
        link: true,
        image: true,
        content:true
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: "link",
            type: "text",
            
        },
        {
            name: "project_type",
            label: "Project Type",
            type: "text",
            
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                        HorizontalRuleFeature(),
                    ]
                },
            }),
            label: false,
            required: true,
        },
         ...slugField(),
    ],
    versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
    
    

}