import { ElementType } from 'react'

import { NavLink } from './nav-link'

export interface NavItemProps {
  title: string
  href: string
  icon: ElementType
}

export function NavItem({ title, href, icon: Icon }: NavItemProps) {
  return (
    <NavLink href={href}>
      <Icon className="h-5 w-5" />
      <span className="font-medium">{title}</span>
    </NavLink>
  )
}
