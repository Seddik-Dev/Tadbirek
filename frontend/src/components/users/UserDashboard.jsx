import React from "react";
import { BalanceCard } from "./dashboard/BalanceCard";
import { ExpensesCard, IncomeCard, SavingsCard } from "./dashboard/IncomeCard";
import { SpendingTrends } from "./dashboard/SpendingTrends";
import { CategoryBreakdown } from "./dashboard/CategoryBreakdown";
import { QuickActions } from "./dashboard/QuickActions";
import { RecentTransactions } from "./dashboard/RecentTransactions";
import { BudgetProgress } from "./dashboard/BudgetProgress";

function UserDashboard() {
  return (
    <div className="min-h-screen w-full bg-background">
      <main className="mx-auto max-w-[1400px] px-4 md:px-6 py-6">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Row 1: Hero Balance + Stat Cards */}
          <BalanceCard />
          <IncomeCard />
          <ExpensesCard />

          {/* Row 2: Savings + Spending Trends + Category Breakdown */}
          <SavingsCard />
          <SpendingTrends />
          <CategoryBreakdown />

          {/* Row 3: Quick Actions + Recent Transactions + Budget Progress */}
          <QuickActions />
          <RecentTransactions />
          <BudgetProgress />
        </div>
      </main>
    </div>
  );
}


export default UserDashboard;