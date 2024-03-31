import Link from "next/link";







export default function NavigationLayout(){
    return(
        <header className="w-full h-16 px-6">
            <div className="flex h-full mx-auto items-center justify-between max-w-screen-xl 2xl:max-w-screen-2xl">
                <div>
                    <Link
                    href="/"
                    >
                    Judah Sullivan
                    </Link>
                </div>
                <nav className="flex gap-5">
                    <Link href='/about'>
                        About
                    </Link>
 <Link href='/blog'>
                       Blog 
                    </Link>
 <Link href='/works'>
                       Works 
                    </Link>



                </nav>

            </div>
        </header>
    )
}