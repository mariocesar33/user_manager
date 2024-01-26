'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps extends LinkProps {
  children: ReactNode
}

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-current={pathname === props.href}
      className="flex items-center gap-3 rounded px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-slate-600 hover:text-foreground  data-[current=true]:text-foreground"
      {...props}
    >
      {props.children}
    </Link>
  )
}
