import { getGlobalSettings } from "@/sanity/lib/queries";
import Footer from "@/src/components/globals/footer";
import Navigation from "@/src/components/globals/navigation";
import { Fragment, ReactNode, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react"









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
          <Footer />
        </Suspense>    
          <Analytics />
        </Fragment>
    )
}