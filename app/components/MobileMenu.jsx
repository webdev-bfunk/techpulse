'use client'
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';
import { Links } from '../constants/links';
import { MdOutlineClose } from 'react-icons/md'
import { HiMenu } from 'react-icons/hi'
import useMenuActive from '../hooks/useMenuActive';
import LinkItem from './LinkItem';
const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open)
    }
  return (
    <>
        <label className='swap swap-rotate'>
            <input type='checkbox'
            onChange={handleToggle}
            checked={ open ? false : true }
            />
            <HiMenu className='dark:text-white swap-on fill-current w-8 h-8'/>
            <MdOutlineClose className='dark:text-white swap-off fill-current w-8 h-8'/>
        </label>

        {open ? (
            <div className='mobile-menu transition-all duration-400 mt-2'>
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
            </div>
        ) : (
            <div>

            </div>
        )}
    </>
  )
}

export default MobileMenu