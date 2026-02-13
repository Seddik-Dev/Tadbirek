import React from "react";
import { Badge } from "@/components/ui/badge";
import { TrendingUpIcon, WalletIcon } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const sparklineData = [
  { v: 32000 },
  { v: 34500 },
  { v: 33200 },
  { v: 36800 },
  { v: 35100 },
  { v: 38400 },
  { v: 37200 },
  { v: 41000 },
  { v: 39800 },
  { v: 42500 },
  { v: 41200 },
  { v: 45230 },
];

export function BalanceCard() {
  return (
    <Card
      className="col-span-1 md:col-span-2 overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <WalletIcon className="h-5 w-5 text-white/80" />
              </div>
              <p className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Total Balance
              </p>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                45,230
              </h2>
              <span className="text-lg font-medium text-white/50">MAD</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <Badge
                className="border-0 text-xs font-semibold px-2.5 py-1"
                style={{
                  backgroundColor: "rgba(42,157,143,0.2)",
                  color: "#2A9D8F",
                }}
              >
                <TrendingUpIcon className="h-3 w-3 mr-1" />
                +12.5%
              </Badge>
              <span className="text-sm text-white/40">vs last month</span>
            </div>
          </div>
          <div className="w-full md:w-56 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sparklineData}>
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E9C46A" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#E9C46A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="v"
                  stroke="#E9C46A"
                  strokeWidth={2.5}
                  fill="url(#sparkGrad)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
