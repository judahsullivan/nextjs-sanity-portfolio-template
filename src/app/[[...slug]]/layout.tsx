import { getGlobalSettings } from "@/sanity/lib/queries";
import Navigation from "@/src/components/globals/navigation";
import { Fragment, ReactNode, Suspense } from "react";









export default async function Layout({
    children
}:{
    children: ReactNode
}){

  const settings = await getGlobalSettings();
    return (
        <Fragment>
   <Suspense>
          <Navigation settings={settings} />
        </Suspense>
        <Suspense>
          <main className="px-6">
        {children}
          </main>
        </Suspense>
        <Suspense>
        </Suspense>    
        </Fragment>
    )
}