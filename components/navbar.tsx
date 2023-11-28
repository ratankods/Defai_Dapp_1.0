"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

function Navbar() {
  return (
    <div className="bg-[black] flex items-center justify-between px-[12px] sticky w-full py-[24px] border-b-1">
      <div className="basis-1/5 sm:basis-full justify-start">
        <Image
          src="/defai white 1.png"
          alt="logo"
          width={100}
          height={80}
          className="shadow-md"
        />
        {/* SITE HEADING WILL GO HERE */}
      </div>

      <div className="hidden sm:flex basis-1/5 sm:basis-full justify-end gap-2">
        <button className="bg-[#333333] p-[8px] rounded-lg">
          <Image src="/bell.svg" alt="home" width={25} height={25} />
        </button>

        <NavigationMenu>
        <NavigationMenuItem>  
          <NavigationMenuTrigger className='bg-transparent '><Image src="/Ethereum (ETH).svg" alt="home" width={24} height={24} /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenu>

        <button className="bg-[#333333] py-[8px] px-[32px] rounded-md">
          <h1 className="text-[#FCD34D] w-[150px]">Connect</h1>
        </button>

        <Link href="/profile">
          <Image
            alt="profileImage"
            src="/Avatar.svg"
            width={40}
            height={40}
            className="rounded-full  p-[3px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
