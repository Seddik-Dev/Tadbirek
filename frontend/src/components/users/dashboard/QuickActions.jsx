import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SendIcon,
  QrCodeIcon,
  CreditCardIcon,
  PlusCircleIcon,
  RepeatIcon,
  ReceiptIcon,
} from "lucide-react";

export function QuickActions() {
  return (
    <Card className="border-0 shadow-md transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-3">
          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(42,157,143,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(42,157,143,0.15)" }}
            >
              <SendIcon className="h-4.5 w-4.5" style={{ color: "#2A9D8F" }} />
            </div>
            <span className="text-xs font-medium text-foreground">Send</span>
          </button>

          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(196,112,75,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(196,112,75,0.15)" }}
            >
              <QrCodeIcon
                className="h-4.5 w-4.5"
                style={{ color: "#C4704B" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">Scan</span>
          </button>

          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(233,196,106,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(233,196,106,0.15)" }}
            >
              <CreditCardIcon
                className="h-4.5 w-4.5"
                style={{ color: "#D4A843" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">Pay</span>
          </button>

          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(38,70,83,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(38,70,83,0.15)" }}
            >
              <PlusCircleIcon
                className="h-4.5 w-4.5"
                style={{ color: "#264653" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">Top Up</span>
          </button>

          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(231,111,81,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(231,111,81,0.15)" }}
            >
              <RepeatIcon
                className="h-4.5 w-4.5"
                style={{ color: "#E76F51" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">
              Transfer
            </span>
          </button>

          <button
            className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "rgba(138,180,168,0.08)" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(138,180,168,0.15)" }}
            >
              <ReceiptIcon
                className="h-4.5 w-4.5"
                style={{ color: "#8AB4A8" }}
              />
            </div>
            <span className="text-xs font-medium text-foreground">Bills</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
