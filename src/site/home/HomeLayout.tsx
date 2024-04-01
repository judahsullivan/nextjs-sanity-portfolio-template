import { HomePageProps } from "@/src/app/(Website)/page"
import { CustomPortableText } from "@/src/components/blocks/CustomPortableText"




export default function HomePageLayout({home}:HomePageProps ){
    return(
        <div >
           <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-12">
                <div className="max-w-fit flex flex-col gap-5">
                <h2 className="text-6xl xl:text-8xl">{home.title}</h2>
                <hr />
                <p className="text-lg">{home.description}</p>
                </div>
                <div>
                    {home.overview && (
                    <CustomPortableText  value={home?.overview} paragraphClasses=""/>
                    )}
                </div>
        </div>
        </div>
    )
} 