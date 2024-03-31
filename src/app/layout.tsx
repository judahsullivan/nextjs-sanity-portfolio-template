import "@/styles/globals.css";
import { Metadata } from "next";


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



  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
