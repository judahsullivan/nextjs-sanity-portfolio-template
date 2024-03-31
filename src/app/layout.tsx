import { getGlobalSettings } from "@/sanity/lib/queries";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Suspense } from "react";
import Navigation from "../components/globals/navigation";


export async function generateMetadata(): Promise<Metadata>{


  return {
    title: {
      template: '',
      default: ''
    }
  }

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getGlobalSettings();



  return (
    <html lang="en">
      <body>
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
        </body>
    </html>
  );
}
