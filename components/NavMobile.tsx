"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import { Link as ScrollLink } from "react-scroll";
import Socials from "./Socials";

const links = [
  { name: "Home", path: "Home" },
  { name: "About", path: "About" },
  { name: "Service", path: "Service" },
  { name: "projet", path: "projet" },
  { name: "Contact", path: "Contact" },
];

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col items-center gap-6 mt-10 justify-center">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)} // Close the menu on link click
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* Socials  */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
