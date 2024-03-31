import {  defineField, defineType } from 'sanity';
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
      type: 'text',
    }),
  ],
});

export const home = definePageType(_homeType, pageTreeConfig,{
  isRoot: true
});
