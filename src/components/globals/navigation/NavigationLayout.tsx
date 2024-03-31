import Link from "next/link";
import { NavigationProps } from ".";
import { MenuItem } from "@/src/types/types";
import { resolveHref } from "@/sanity/lib/resolveUrl";







export default function NavigationLayout(props: NavigationProps){
    const { settings } = props
  const menuItems = settings?.menuItems || ([] as MenuItem[])

  const homeLink = menuItems.find(menuItems => menuItems._type == 'home')
  const pageLinks = menuItems.filter(menuItems => menuItems._type !== 'home')

    return(
        <header className="w-full h-16 px-6">
            <div className="flex h-full mx-auto items-center justify-between max-w-screen-xl 2xl:max-w-screen-2xl">
              <div>
                {homeLink && (() => {
                  const href = resolveHref(homeLink._type)
                  if(!href){
                    return null
                  }
                  return(
                    <Link
                    passHref
                    href={href}
                    replace={false}
                    >
                      {homeLink.title}
                    </Link>
                  )
                })()}
              </div>
                <nav className="flex gap-5">
                     {pageLinks &&
        pageLinks.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug)
          if (!href) {
            return null
          }
          return (
            <Link
            passHref
              key={key}
              className={''}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
        </nav>
            </div>
        </header>
    )
}