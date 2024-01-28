import { Chart } from './chart'
import { MonthRevenueCard } from './month-revenue-card'
import { RightbarOne } from './rightbar1'
import { Rightbar } from './rightbar2'
import { Transactions } from './transactions'

export default function Dashboard() {
  return (
    <div className="mt-5 grid grid-cols-4 gap-5">
      <div className="col-span-3 flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <MonthRevenueCard />
          <MonthRevenueCard />
          <MonthRevenueCard />
        </div>

        <Transactions />

        <Chart />
      </div>

      <div className="col-span-1">
        <div className="fixed mr-10 flex flex-col gap-5">
          <RightbarOne />
          <Rightbar />
        </div>
      </div>
    </div>
  )
}
