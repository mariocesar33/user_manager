'use client'

import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenueCard() {
  return (
    <Card className="w-full bg-muted hover:bg-slate-600">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-4">
        <CardTitle className="text-base font-semibold">
          Recita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-3">
        <span className="text-2xl font-bold tracking-tight">1.200</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+25%</span>{' '}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
