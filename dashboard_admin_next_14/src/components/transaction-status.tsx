export type TransactionStatus = 'pending' | 'canceled' | 'done'

interface TransactionsStatusProps {
  status: TransactionStatus
}

const transactionStatusMap: Record<TransactionStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  done: 'Entregue',
}

export function TransactionStatus({ status }: TransactionsStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'done' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      <span className="font-medium">{transactionStatusMap[status]}</span>
    </div>
  )
}
