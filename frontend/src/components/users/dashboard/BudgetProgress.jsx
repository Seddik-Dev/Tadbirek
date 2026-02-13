import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function CircularProgress({ spent, total, color, size = 56 }) {
  const percentage = Math.min((spent / total) * 100, 100);
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-foreground">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
}

export function BudgetProgress() {
  return (
    <Card className="border-0 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Budget Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Housing */}
        <div className="flex items-center gap-4">
          <CircularProgress spent={4200} total={5000} color="#C4704B" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-medium text-foreground">
                Housing
              </span>
              <span className="text-xs text-muted-foreground">
                4,200 / 5,000 MAD
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "84%",
                  backgroundColor: "#C4704B",
                }}
              />
            </div>
          </div>
        </div>

        {/* Food */}
        <div className="flex items-center gap-4">
          <CircularProgress spent={2800} total={3500} color="#E9C46A" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-medium text-foreground">Food</span>
              <span className="text-xs text-muted-foreground">
                2,800 / 3,500 MAD
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "80%",
                  backgroundColor: "#E9C46A",
                }}
              />
            </div>
          </div>
        </div>

        {/* Transport */}
        <div className="flex items-center gap-4">
          <CircularProgress spent={1900} total={2500} color="#2A9D8F" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-medium text-foreground">
                Transport
              </span>
              <span className="text-xs text-muted-foreground">
                1,900 / 2,500 MAD
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "76%",
                  backgroundColor: "#2A9D8F",
                }}
              />
            </div>
          </div>
        </div>

        {/* Shopping */}
        <div className="flex items-center gap-4">
          <CircularProgress spent={1580} total={2000} color="#264653" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-medium text-foreground">
                Shopping
              </span>
              <span className="text-xs text-muted-foreground">
                1,580 / 2,000 MAD
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "79%",
                  backgroundColor: "#264653",
                }}
              />
            </div>
          </div>
        </div>

        {/* Entertainment */}
        <div className="flex items-center gap-4">
          <CircularProgress spent={1200} total={2000} color="#E76F51" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-sm font-medium text-foreground">
                Entertainment
              </span>
              <span className="text-xs text-muted-foreground">
                1,200 / 2,000 MAD
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "60%",
                  backgroundColor: "#E76F51",
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
