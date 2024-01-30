import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

import iphone from '../../../public/iphone.jpg'

export default function Products() {
  return (
    <div className="mt-5 flex flex-col gap-2 rounded-sm bg-muted p-4">
      <div className="flex items-center justify-between  pl-4 pr-7">
        <Search placeholder="Procurar por um usuário" />
        <Link
          href="/dashboard/products/add"
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
              <TableHead className="w-[400px]">Título</TableHead>
              <TableHead className="w-[250px]">Descrição</TableHead>
              <TableHead className="w-[250px]">Preço</TableHead>
              <TableHead className="w-[250px]">Criado em</TableHead>
              <TableHead className="w-[40px]">Estoque</TableHead>
              <TableHead className="w-[80px]"></TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={iphone}
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 "
                />

                <span>Iphone</span>
              </TableCell>
              <TableCell>Pro max</TableCell>
              <TableCell>{(98000).toLocaleString('cv')}</TableCell>
              <TableCell>30/01/2024</TableCell>
              <TableCell>20</TableCell>
              <TableCell>
                <Link href="/dashboard/products/katxupa">
                  <Button className="h-7 bg-green-600 text-white hover:bg-green-500">
                    Ver
                  </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button className="h-7 bg-red-600 text-white hover:bg-red-500">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={iphone}
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 "
                />

                <span>Iphone</span>
              </TableCell>
              <TableCell>Pro max</TableCell>
              <TableCell>{(98000).toLocaleString('cv')}</TableCell>
              <TableCell>30/01/2024</TableCell>
              <TableCell>20</TableCell>
              <TableCell>
                <Link href="/dashboard/products/katxupa">
                  <Button className="h-7 bg-green-600 text-white hover:bg-green-500">
                    Ver
                  </Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button className="h-7 bg-red-600 text-white hover:bg-red-500">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={iphone}
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 "
                />

                <span>Iphone</span>
              </TableCell>
              <TableCell>Pro max</TableCell>
              <TableCell>{(98000).toLocaleString('cv')}</TableCell>
              <TableCell>30/01/2024</TableCell>
              <TableCell>20</TableCell>
              <TableCell>
                <Button className="h-7 bg-green-600 text-white hover:bg-green-500">
                  Ver
                </Button>
              </TableCell>
              <TableCell>
                <Button className="h-7 bg-red-600 text-white hover:bg-red-500">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Pagination
        // onPageChange={handlePaginate}
        pageIndex={0}
        totalCount={100}
        perPage={20}
      />
    </div>
  )
}
