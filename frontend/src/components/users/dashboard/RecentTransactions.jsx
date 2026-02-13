 import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ShoppingBagIcon,
  UtensilsIcon,
  CarIcon,
  HomeIcon,
  WifiIcon,
  HeartIcon,
  ArrowRightIcon,
} from 'lucide-react'

export function RecentTransactions() {
  return (
    <Card className="col-span-1 md:col-span-2 border-0 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">
            Recent Transactions
          </CardTitle>
          <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            View All
            <ArrowRightIcon className="h-3 w-3" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        {/* Transaction 1 */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(233,196,106,0.12)',
            }}
          >
            <UtensilsIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#D4A843',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Café Hafa
            </p>
            <p className="text-xs text-muted-foreground">Food & Drinks</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#C4704B',
              }}
            >
              -85 MAD
            </p>
            <p className="text-xs text-muted-foreground">Today</p>
          </div>
        </div>

        {/* Transaction 2 */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(196,112,75,0.12)',
            }}
          >
            <ShoppingBagIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#C4704B',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Marjane Supermarket
            </p>
            <p className="text-xs text-muted-foreground">Shopping</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#C4704B',
              }}
            >
              -420 MAD
            </p>
            <p className="text-xs text-muted-foreground">Yesterday</p>
          </div>
        </div>

        {/* Transaction 3 */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(42,157,143,0.12)',
            }}
          >
            <CarIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#2A9D8F',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Tramway Subscription
            </p>
            <p className="text-xs text-muted-foreground">Transport</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#C4704B',
              }}
            >
              -230 MAD
            </p>
            <p className="text-xs text-muted-foreground">Feb 11</p>
          </div>
        </div>

        {/* Transaction 4 */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(38,70,83,0.12)',
            }}
          >
            <HomeIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#264653',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Rent Payment
            </p>
            <p className="text-xs text-muted-foreground">Housing</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#C4704B',
              }}
            >
              -4,200 MAD
            </p>
            <p className="text-xs text-muted-foreground">Feb 10</p>
          </div>
        </div>

        {/* Transaction 5 */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(138,180,168,0.12)',
            }}
          >
            <WifiIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#8AB4A8',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Inwi Internet
            </p>
            <p className="text-xs text-muted-foreground">Utilities</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#C4704B',
              }}
            >
              -349 MAD
            </p>
            <p className="text-xs text-muted-foreground">Feb 8</p>
          </div>
        </div>

        {/* Transaction 6 - Income */}
        <div className="flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-muted/50 cursor-pointer">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(42,157,143,0.12)',
            }}
          >
            <HeartIcon
              className="h-4.5 w-4.5"
              style={{
                color: '#2A9D8F',
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              Salary Deposit
            </p>
            <p className="text-xs text-muted-foreground">Income</p>
          </div>
          <div className="text-right shrink-0">
            <p
              className="text-sm font-semibold"
              style={{
                color: '#2A9D8F',
              }}
            >
              +18,400 MAD
            </p>
            <p className="text-xs text-muted-foreground">Feb 5</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}