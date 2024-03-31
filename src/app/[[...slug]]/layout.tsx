import Navigation from "@/src/components/globals/navigation";
import { Fragment, ReactNode } from "react";








export default async function SiteLayout({
    children
}:{
    children: ReactNode;
}){
    return(
        <Fragment>
            <Navigation />
            <div className="px-6">
                {children}
            </div>
        </Fragment>
    )
}