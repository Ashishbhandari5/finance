"use client";
import { usePathname ,useRouter } from "next/navigation";
import { NavButton} from "./nav-button";
import {Sheet,
  SheetContent,
  SheetTrigger} from '@/components/ui/button';
  import {useMedia} from 'react-use'
import { useState } from "react";
 



const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];

export const Navigation = () => {
  const [isOpen,setIsOpen]=useState(false);
  const router=useRouter
  const pathname=usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton 
        key={route.href}
         href={route.href}
          label={route.label}
          isActive={pathname===route.href} />
      ))}
    </nav>
  );
};
