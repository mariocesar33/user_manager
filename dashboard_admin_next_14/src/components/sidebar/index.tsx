import {
  Briefcase,
  CircleUserRound,
  DollarSign,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  Settings,
  ShoppingBag,
  UsersRound,
} from 'lucide-react'

import { NavItem } from './nave-item'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <aside className="w-full space-y-3">
      <div className="">
        <Profile />
      </div>

      <nav className=" w-full space-y-1">
        <NavItem href="/dashboard" title="Dashboard" icon={LayoutDashboard} />
        <NavItem href="/dashboard/users" title="Users" icon={CircleUserRound} />
        <NavItem
          href="/dashboard/products"
          title="Products"
          icon={ShoppingBag}
        />
        <NavItem
          href="/dashboard/transactions"
          title="Transactions"
          icon={DollarSign}
        />

        <NavItem href="/dashboard/revenue" title="Revenue" icon={Briefcase} />
        <NavItem href="/dashboard/reports" title="Reports" icon={LineChart} />
        <NavItem href="/dashboard/teams" title="Teams" icon={UsersRound} />

        <NavItem href="/dashboard/settings" title="Settings" icon={Settings} />
        <NavItem href="/dashboard/help" title="Help" icon={HelpCircle} />
      </nav>
    </aside>
  )
}
