import Image from 'next/image'

import { TransactionStatus } from '@/components/transaction-status'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Transactions() {
  const data = new Date()
  return (
    <div className="rounded-md border bg-muted">
      <h2 className="pl-4 pt-4 text-xl text-muted-foreground">
        Latest Transactions
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Name</TableHead>
            <TableHead className="w-[140px]">Status</TableHead>
            <TableHead className="w-[140px]">Date</TableHead>
            <TableHead className="w-[64px]">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image
                src="https://github.com/mariocesar33.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />

              <span>Mário César Silva</span>
            </TableCell>
            <TableCell>
              <TransactionStatus status="done" />
            </TableCell>
            <TableCell>{`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}</TableCell>
            <TableCell>{(2850).toLocaleString('cv')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image
                src="https://github.com/mariocesar33.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />

              <span>Mário César Silva</span>
            </TableCell>
            <TableCell>
              <TransactionStatus status="canceled" />
            </TableCell>
            <TableCell>{`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}</TableCell>
            <TableCell>{(2850).toLocaleString('cv')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image
                src="https://github.com/diego3g.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />

              <span>Diego Fernandes</span>
            </TableCell>
            <TableCell>
              <TransactionStatus status="done" />
            </TableCell>
            <TableCell>{`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}</TableCell>
            <TableCell>{(2850).toLocaleString('cv')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image
                src="https://github.com/mariocesar33.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />

              <span>Mário César Silva</span>
            </TableCell>
            <TableCell>
              <TransactionStatus status="pending" />
            </TableCell>
            <TableCell>{`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}</TableCell>
            <TableCell>{(2850).toLocaleString('cv')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="flex items-center gap-2">
              <Image
                src="https://github.com/mariocesar33.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 rounded-full"
              />

              <span>Mário César Silva</span>
            </TableCell>
            <TableCell>
              <TransactionStatus status="canceled" />
            </TableCell>
            <TableCell>{`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}</TableCell>
            <TableCell>{(2850).toLocaleString('cv')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
