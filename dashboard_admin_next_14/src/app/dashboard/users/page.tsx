import dayjs from 'dayjs'
import { Plus, Search as SearchIcon, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchUsers } from '@/actions/fetch-users'
import { Pagination } from '@/components/pagination'
import { Search } from '@/components/search'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface UsersProps {
  searchParams: {
    q: string
    page: string
  }
}

export default async function Users({ searchParams }: UsersProps) {
  const { q, page } = searchParams

  const query = q || ''
  const pageIndex = page || '1'

  const { users, meta } = await fetchUsers({ name: query, pageIndex })

  return (
    <div className="mt-5 flex flex-col gap-2 rounded-sm bg-muted p-4">
      <div className="flex items-center justify-between  pl-4 pr-7">
        <Search placeholder="Procurar por um usuário" />
        <Link
          href="/dashboard/users/add"
          className="flex h-8 items-center gap-1 rounded-sm border-2 border-gray-600 px-2"
        >
          <Plus className="h-4 w-4" />
          Novo
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]">Name</TableHead>
              <TableHead className="w-[250px]">Email</TableHead>
              <TableHead className="w-[250px]">Criado em</TableHead>
              <TableHead className="w-[100px]">privilégio</TableHead>
              <TableHead className="w-[40px]">Estado</TableHead>
              <TableHead className="w-[80px]"></TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user.id}>
                  <TableCell className="flex items-center gap-2">
                    {user.avatarURL ? (
                      <Image
                        src={user.avatarURL}
                        alt=""
                        width={40}
                        height={40}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <User2 className="size-8 rounded-full bg-muted-foreground text-muted" />
                    )}

                    <span className="capitalize">{user.name}</span>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {dayjs(user.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {user.role === 'ADMIN' ? 'admin' : 'cliente'}
                  </TableCell>
                  <TableCell>{user.stato ? 'ativo' : 'não ativo'}</TableCell>
                  <TableCell>
                    <Link href={`/dashboard/users/${user.username}`}>
                      <Button
                        className="h-8 border-2 border-muted-foreground"
                        variant={'ghost'}
                      >
                        <SearchIcon className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button className="h-8" variant={'destructive'}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>

      <Pagination
        pageIndex={meta.pageIndex}
        totalCount={meta.totalCount}
        perPage={meta.perPage}
      />
    </div>
  )
}
