"use client";
import React from "react";
import { Links } from "../constants/links";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import clsx from "clsx";
import { IoMdPulse } from "react-icons/io";
import ThemeToggle from "./ThemeToggle";
import useMenuActive from "@/app/hooks/useMenuActive";
import LinkItem from "./LinkItem";
import isActive from '../hooks/useMenuActive';
const Navbar = () => {
  return (
    <nav className="w-full py-5">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-4xl dark:text-white">
              Tech Pulse
            </h1>
            <IoMdPulse
              className="-ml-3.5 pt-0.5 text-6xl text-gray-900 dark:text-white"
              aria-hidden="true"
            />
          </div>
        </Link>
        <div>
          <ul className="flex gap-4 p-3 hidden md:flex dark:text-white">
            {Links.map((link, index) => {
              const isActive = useMenuActive(link.route);
              return (
                <LinkItem
                  key={index}
                  route={link.route}
                  label={link.label}
                  isActive={isActive}
               />
              );
            })}
          </ul>
        </div>
        <div className="p-3">
          <ThemeToggle />
        </div>
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
