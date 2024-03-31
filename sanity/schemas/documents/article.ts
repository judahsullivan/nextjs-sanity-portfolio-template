import {  defineField, defineType } from 'sanity';
import {  definePageType } from '@q42/sanity-plugin-page-tree';
import { pageTreeConfig } from '../../../page-tree-config';

const _articleType = defineType({
  name: 'article',
  type: 'document',
  title: 'Blog Article',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});

export const article = definePageType(_articleType, pageTreeConfig);