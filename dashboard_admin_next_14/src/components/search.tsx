'use client'

import { Search as SearchIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    // Criar novo URL
    const params = new URLSearchParams(searchParams)

    if (event.target.value) {
      // params.set('q', event.target.value)
      event.target.value.length > 2 && params.set('q', event.target.value)
    } else {
      params.delete('q')
    }

    replace(`${pathname}?${params}`)
  }

  return (
    <form className="flex items-center gap-1 rounded-sm bg-slate-600 p-1.5">
      <Button
        type="submit"
        className="h-6 bg-transparent p-1 hover:bg-transparent"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>
      <Input
        className="h-5 border-none bg-transparent"
        onChange={handleSearch}
        placeholder={placeholder}
        type="text"
      />
    </form>
  )
}
