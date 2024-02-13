import dayjs from 'dayjs'
import { Plus, Search as SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { fetchProducts } from '@/actions/fetch-products'
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

interface ProductsProps {
  searchParams: {
    q: string
    page: string
  }
}

export default async function Products({ searchParams }: ProductsProps) {
  const { q, page } = searchParams

  const query = q || ''
  const pageIndex = page || '1'

  const { products, meta } = await fetchProducts({ title: query, pageIndex })

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
            {products.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell className="flex items-center gap-2">
                    <Image
                      src={product.imgURL}
                      alt=""
                      width={40}
                      height={40}
                      className="h-8 w-8 "
                    />

                    <span>{product.title}</span>
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price.toLocaleString('cv')}</TableCell>
                  <TableCell>
                    {dayjs(product.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Link href={`/dashboard/users/${product.title}`}>
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
