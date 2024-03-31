
import { ArticlePageProps } from './index';





export default function ArticleLayout({article}: ArticlePageProps){
    return (
    <div className="max-w-screen-xl w-full mx-auto ">
        <div className="flex flex-col gap-5">
            <div className="max-w-fit flex flex-col gap-5">
<h2 className='text-6xl'>
        {article?.title}
            </h2>
            <hr />
            </div>
            <p className='text-lg'>{article?.description}</p>
        </div>
    </div>
    )
}