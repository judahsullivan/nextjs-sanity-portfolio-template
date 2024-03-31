import { client } from "@/sanity/lib/client";
import { getGlobalSettings, settingsQuery } from "@/sanity/lib/queries";
import Navigation from "@/src/components/globals/navigation";
import { Fragment, ReactNode } from "react";
import { SettingsPayload } from "@/src/types/types";








export default async function SiteLayout({
    children,
}:{
    children: ReactNode;
}){
    const settings  = await getGlobalSettings() 


    return(
        <Fragment>
            <Navigation settings={settings}/>
            <div className="px-6">
                {children}
            </div>
        </Fragment>
    )
}