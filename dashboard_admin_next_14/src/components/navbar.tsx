'use client'

import { Bell, Globe, MessageSquareText, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Input } from './ui/input'

export function Navbar() {
  const pathName = usePathname()

  return (
    <div className="flex items-center justify-between rounded-sm bg-muted p-2">
      <h1 className="text-xl font-bold tracking-tight">
        {pathName.split('/').pop()}
      </h1>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 rounded-sm bg-slate-600 p-2.5">
          <Search className="h-5 w-5" />
          <Input
            placeholder="Procura..."
            type="text"
            className="h-5 border-none bg-transparent"
          />
        </div>

        <div className="flex items-center space-x-2">
          <MessageSquareText className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <Globe className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
