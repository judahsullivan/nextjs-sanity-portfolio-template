import { HomeProps } from "@/src/types/types";
import HomePageLayout from "./HomeLayout";


export interface HomePageProps{
    home: HomeProps
}



export default function Home({home}: HomePageProps){
    return <HomePageLayout home={home}/>
}