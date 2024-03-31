import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { PageMetadata } from '@q42/sanity-plugin-page-tree/next';
import Home from './home';
import Page from './page';
import ArticlePage from './article';
import ProjectPage from './project';



interface PageHandlerProps  {
  pageMetadata: PageMetadata;
};




export default async function SiteHandler({ pageMetadata }: PageHandlerProps)  {
  switch (pageMetadata.type) {
    case 'home': {
      const home = await client.fetch<any>(`*[_id == $id][0]{...}`, { id: pageMetadata._id });

      if (!home) {
        return notFound();
      }
      return <Home home={home} /> 

    }
    case 'page': {
      const page =
       await client.fetch<any>(`
       *[_id == $id][0]{
        ...,
        "contents": *[_type in ["article", "project"] && references(^._id)]
      }`, { id: pageMetadata._id });

      if (!page) {
        return notFound();
      }
      return <Page page={page}/> 

    }
case 'article': {
      const article =
       await client.fetch<any>(`
       *[_id == $id][0]{
        ...,
      }`, { id: pageMetadata._id });

      if (!article) {
        return notFound();
      }
      return <ArticlePage article={article}/> 
    }
case 'project': {
      const project =
       await client.fetch<any>(`
       *[_id == $id][0]{
        ...,
      }`, { id: pageMetadata._id });

      if (!project) {
        return notFound();
      }
      return <ProjectPage project={project}/> 
    }
  }

};