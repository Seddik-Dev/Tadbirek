import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 15200, expenses: 11800 },
  { name: "Feb", income: 16400, expenses: 12300 },
  { name: "Mar", income: 14800, expenses: 10900 },
  { name: "Apr", income: 17200, expenses: 13400 },
  { name: "May", income: 16800, expenses: 11200 },
  { name: "Jun", income: 18400, expenses: 12680 },
];

const weeklyData = [
  { name: "Mon", income: 3200, expenses: 2100 },
  { name: "Tue", income: 2800, expenses: 1900 },
  { name: "Wed", income: 3600, expenses: 2800 },
  { name: "Thu", income: 2400, expenses: 1600 },
  { name: "Fri", income: 4100, expenses: 3200 },
  { name: "Sat", income: 1800, expenses: 2400 },
  { name: "Sun", income: 900, expenses: 1100 },
];

const periods = ["Week", "Month", "Year"];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null;
  return (
    <div className="rounded-lg border border-border bg-card p-3 shadow-lg backdrop-blur-sm">
      <p className="text-xs font-medium text-muted-foreground mb-2">{label}</p>
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: entry.color,
            }}
          />
          <span className="text-muted-foreground capitalize">
            {entry.dataKey}:
          </span>
          <span className="font-semibold text-foreground">
            {entry.value.toLocaleString()} MAD
          </span>
        </div>
      ))}
    </div>
  );
}

export function SpendingTrends() {
  const [period, setPeriod] = useState("Month");
  const data = period === "Week" ? weeklyData : monthlyData;

  return (
    <Card className="col-span-1 md:col-span-2 border-0 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <CardTitle className="text-lg font-semibold">
            Spending Trends
          </CardTitle>
          <div className="flex items-center gap-1 rounded-full bg-muted/60 p-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  period === p
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A9D8F" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#2A9D8F" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C4704B" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#C4704B" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--muted-foreground))",
                }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#2A9D8F"
                strokeWidth={2.5}
                fill="url(#incomeGrad)"
                dot={false}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#C4704B"
                strokeWidth={2.5}
                fill="url(#expenseGrad)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#2A9D8F" }}
            />
            <span className="text-xs text-muted-foreground">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "#C4704B" }}
            />
            <span className="text-xs text-muted-foreground">Expenses</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
