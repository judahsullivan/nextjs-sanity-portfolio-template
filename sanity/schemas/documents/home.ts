import {  defineArrayMember, defineField, defineType } from 'sanity';
import {  definePageType } from '@q42/sanity-plugin-page-tree';
import { pageTreeConfig } from '../../../page-tree-config';

const _homeType = defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      type: 'text',
    }),
     defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
  ],
});

export const home = definePageType(_homeType, pageTreeConfig,{
  isRoot: true
});
