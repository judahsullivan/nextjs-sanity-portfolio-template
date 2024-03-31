import { isArticleProps, isProjectProps } from "@/src/types/types";
import { PageProps } from ".";
import Link from "next/link";







export default function PageLayout({page}: PageProps){
    return(
        <div className="w-full  flex flex-col">
            <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-12">
                <div className="max-w-fit flex flex-col gap-5">
                <h2 className="text-6xl">{page.title}</h2>
                <hr />
                <p>{page.description}</p>
                </div>
                <div className="flex flex-col gap-5">
                {page.contents?.map((content) => {
                    if(isArticleProps(content)){
                        return(
                            <div className="flex flex-col gap-2.5" key={content._id}>
                                <h2 className="text-2xl">{content.title}</h2>
                                <p>{content.description}</p>
                                <Link href={`/blog/${content?.slug.current}`} className="">
                                Read More
                                </Link>
                            </div>

                        )
                    } else if(isProjectProps(content)){
                        return(
                            <div className="flex flex-col gap-2.5" key={content._id}>
                                <h2 className="text-2xl">{content.title}</h2>
                                <p>{content.description}</p>

                                <Link href={`/works/${content?.slug.current}`} className="">
                                Read More
                                </Link>
                            </div>
                        )
                    }
                    return null;
                })}

                </div>
            </div>
        </div>
    )
}