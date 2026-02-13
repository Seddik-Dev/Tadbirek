import React from "react";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  PiggyBankIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export function IncomeCard() {
  return (
    <Card
      className="group border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(42,157,143,0.08), rgba(42,157,143,0.03))",
      }}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: "rgba(42,157,143,0.12)",
            }}
          >
            <ArrowUpRightIcon
              className="h-5 w-5"
              style={{
                color: "#2A9D8F",
              }}
            />
          </div>
          <div
            className="flex items-center gap-1 text-xs font-medium"
            style={{
              color: "#2A9D8F",
            }}
          >
            <TrendingUpIcon className="h-3 w-3" />
            +8.2%
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">Income</p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-foreground">18,400</span>
          <span className="text-sm text-muted-foreground">MAD</span>
        </div>
      </CardContent>
    </Card>
  );
}
export function ExpensesCard() {
  return (
    <Card
      className="group border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(196,112,75,0.08), rgba(196,112,75,0.03))",
      }}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: "rgba(196,112,75,0.12)",
            }}
          >
            <ArrowDownRightIcon
              className="h-5 w-5"
              style={{
                color: "#C4704B",
              }}
            />
          </div>
          <div
            className="flex items-center gap-1 text-xs font-medium"
            style={{
              color: "#C4704B",
            }}
          >
            <TrendingDownIcon className="h-3 w-3" />
            -3.1%
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">Expenses</p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-foreground">12,680</span>
          <span className="text-sm text-muted-foreground">MAD</span>
        </div>
      </CardContent>
    </Card>
  );
}
export function SavingsCard() {
  return (
    <Card
      className="group border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(233,196,106,0.08), rgba(233,196,106,0.03))",
      }}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: "rgba(233,196,106,0.15)",
            }}
          >
            <PiggyBankIcon
              className="h-5 w-5"
              style={{
                color: "#D4A843",
              }}
            />
          </div>
          <div
            className="flex items-center gap-1 text-xs font-medium"
            style={{
              color: "#2A9D8F",
            }}
          >
            <TrendingUpIcon className="h-3 w-3" />
            +15.7%
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-1">Savings</p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-foreground">5,720</span>
          <span className="text-sm text-muted-foreground">MAD</span>
        </div>
      </CardContent>
    </Card>
  );
}
