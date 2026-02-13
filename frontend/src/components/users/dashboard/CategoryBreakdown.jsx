import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const categories = [
  { name: "Housing", value: 4200, color: "#C4704B" },
  { name: "Food", value: 2800, color: "#E9C46A" },
  { name: "Transport", value: 1900, color: "#2A9D8F" },
  { name: "Shopping", value: 1580, color: "#264653" },
  { name: "Entertainment", value: 1200, color: "#E76F51" },
  { name: "Other", value: 1000, color: "#8AB4A8" },
];

const total = categories.reduce((sum, c) => sum + c.value, 0);

export function CategoryBreakdown() {
  return (
    <Card className="row-span-1 md:row-span-2 border-0 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative mx-auto w-48 h-48 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categories}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {categories.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">
              {(total / 1000).toFixed(1)}k
            </span>
            <span className="text-xs text-muted-foreground">MAD Total</span>
          </div>
        </div>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="h-3 w-3 rounded-full transition-transform duration-200 group-hover:scale-125"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-sm text-foreground">{cat.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {cat.value.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground w-10 text-right">
                  {((cat.value / total) * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
