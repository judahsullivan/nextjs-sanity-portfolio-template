
import { ArticlePageProps } from './index';
import ImageBox from '@/src/components/ui/ImageBox';





export default function ArticleLayout({article}: ArticlePageProps){
    console.log(article)
    return (
    <div className="max-w-screen-xl w-full mx-auto ">
        <div className="flex flex-col gap-5">
            <div className="max-w-fit flex flex-col gap-5">
<h2 className='text-6xl'>
        {article?.title}
            </h2>
            <hr />
            </div>
            <ImageBox
             image={article?.coverImage}
              alt={article?.title}        
               classesWrapper="aspect-[16/9]"
  />
            <p className='text-lg'>{article?.description}</p>
        </div>
    </div>
    )
}