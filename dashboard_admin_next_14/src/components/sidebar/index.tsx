import {
  Briefcase,
  CircleUserRound,
  DollarSign,
  HelpCircle,
  LayoutDashboard,
  LineChart,
  LogOut,
  Settings,
  ShoppingBag,
  UsersRound,
} from 'lucide-react'

import { Copyright } from '../copyright'
import { Button } from '../ui/button'
import { NavItem } from './nave-item'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <aside className="flex w-full flex-col justify-between">
      <div className="">
        <Profile />
      </div>

      <div>
        <nav className="w-full space-y-1">
          <NavItem href="/dashboard" title="Dashboard" icon={LayoutDashboard} />
          <NavItem
            href="/dashboard/users"
            title="Users"
            icon={CircleUserRound}
          />
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

          <NavItem
            href="/dashboard/settings"
            title="Settings"
            icon={Settings}
          />
          <NavItem href="/dashboard/help" title="Help" icon={HelpCircle} />
        </nav>

        <Button className="flex w-full items-center justify-start gap-2 bg-transparent text-white hover:bg-slate-600">
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>

      <Copyright />
    </aside>
  )
}
