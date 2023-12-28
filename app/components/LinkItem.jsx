import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'


const LinkItem = ({route, label, isActive}) => {
  return (
    <Link 
    href={route}
    className={clsx("px-3 py-1", isActive && "dark:bg-sky-400 bg-slate-800 text-white rounded-md")}>
        {label}
    </Link>
  )
}

export default LinkItem