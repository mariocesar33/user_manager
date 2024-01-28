'use client'

import { Bell, Globe, MessageSquareText } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Search } from './search'

export function Navbar() {
  const pathName = usePathname()

  return (
    <div className="flex items-center justify-between rounded-sm bg-muted px-4 py-2">
      <h1 className="text-xl font-bold tracking-tight">
        {pathName.split('/').pop()}
      </h1>

      <div className="flex items-center gap-5">
        <Search placeholder="Procura..." />

        <div className="flex items-center space-x-5">
          <MessageSquareText className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <Globe className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
