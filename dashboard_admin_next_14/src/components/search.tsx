import { Search as SearchIcon } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex items-center gap-1 rounded-sm bg-slate-600 p-1.5">
      <Button
        type="submit"
        className="h-6 bg-transparent p-1 hover:bg-transparent"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>
      <Input
        placeholder={placeholder}
        type="text"
        className="h-5 border-none bg-transparent"
      />
    </form>
  )
}
