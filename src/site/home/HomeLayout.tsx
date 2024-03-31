import { HomePageProps } from "@/src/app/(Website)/page"




export default function HomePageLayout({home}:HomePageProps ){
    return(
        <div >
           <div className="max-w-screen-xl mx-auto w-full flex flex-col gap-12">
                <div className="max-w-fit flex flex-col gap-5">
                <h2 className="text-6xl">{home.title}</h2>
                <hr />
                <p className="text-lg">{home.description}</p>
                </div>
        </div>
        </div>
    )
} 