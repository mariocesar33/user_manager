import { MonthRevenueCard } from './month-revenue-card'
import { Transactions } from './transactions'

export default function Dashboard() {
  return (
    <div className="mt-5 grid grid-cols-4">
      <div className="col-span-3 flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <MonthRevenueCard />
          <MonthRevenueCard />
          <MonthRevenueCard />
        </div>

        <Transactions />

        <div>week Recap</div>
      </div>

      <div className="col-span-1">Coluna direita</div>
    </div>
  )
}
