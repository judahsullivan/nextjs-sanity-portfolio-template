import { ProjectPageProps } from ".";










export default function ProjectPageLayout({project}: ProjectPageProps){
    return(
        <div>

<div className="max-w-screen-xl w-full mx-auto ">
            <div className="max-w-fit flex flex-col gap-5">
<h2 className='text-6xl'>
        {project?.title}
            </h2>
            <hr />
            </div>
            <p className='text-lg'>{project?.description}</p>
        </div>
        </div>
    )
}