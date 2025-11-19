import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Goal {
  goalId: string;
  goalType: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string; // ISO date
}

interface Category {
  categoryName: string;
  budgetedAmount: number;
  actualAmount: number;
}

interface Budget {
  monthlyIncome: number;
  monthlyExpenses: number;
  categories: Category[];
}

interface CashFlowEntry {
  month: string; // e.g., "2025-11"
  income: number;
  expenses: number;
}

interface Plan {
  planId: string;
  userId: string;
  goals: Goal[];
  budget: Budget;
  cashFlow: CashFlowEntry[];
}

@Component({
  selector: 'app-goals',
  imports: [CommonModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {

  // ------------------ Mock data based on the schema ------------------
   MOCK_PLAN: Plan = {
    planId: 'plan-001',
    userId: 'user-123',
    goals: [
      {
        goalId: 'g-ef-01',
        goalType: 'Emergency Fund',
        targetAmount: 120000,
        currentAmount: 35000,
        targetDate: '2026-06-30',
      },
      {
        goalId: 'g-ret-01',
        goalType: 'Retirement',
        targetAmount: 5000000,
        currentAmount: 600000,
        targetDate: '2045-01-01',
      },
      {
        goalId: 'g-vac-01',
        goalType: 'Vacation (Japan)',
        targetAmount: 200000,
        currentAmount: 50000,
        targetDate: '2026-11-01',
      },
    ],
    budget: {
      monthlyIncome: 80000,
      monthlyExpenses: 47000,
      categories: [
        { categoryName: 'Rent', budgetedAmount: 20000, actualAmount: 20000 },
        { categoryName: 'Groceries', budgetedAmount: 8000, actualAmount: 9500 },
        { categoryName: 'Utilities', budgetedAmount: 3000, actualAmount: 2800 },
        { categoryName: 'Transport', budgetedAmount: 4000, actualAmount: 2500 },
        { categoryName: 'Entertainment', budgetedAmount: 3000, actualAmount: 5200 },
        { categoryName: 'Savings', budgetedAmount: 22000, actualAmount: 15200 },
      ],
    },
    cashFlow: [
      { month: '2025-08', income: 80000, expenses: 48000 },
      { month: '2025-09', income: 80000, expenses: 50000 },
      { month: '2025-10', income: 80000, expenses: 47000 },
      { month: '2025-11', income: 80000, expenses: 46000 },
    ],
  };

    plan: Plan = this.MOCK_PLAN;

    get netSavings(): number {
      return this.plan.budget.monthlyIncome - this.plan.budget.monthlyExpenses;
    }

    progressPercentage(g: Goal): number {
      if (!g.targetAmount || g.targetAmount === 0) return 0;
      const pct = (g.currentAmount / g.targetAmount) * 100;
      return Math.min(100, Math.max(0, Math.round(pct)));
    }

    monthsToTarget(g: Goal): number {
      const now = new Date();
      const target = new Date(g.targetDate);
      const months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
      return Math.max(0, months);
    }

    gradientFor(g: Goal): string {
      // Pick a pleasant gradient color based on goal type (keeps UI lively)
      if (g.goalType.toLowerCase().includes('emergency')) return 'linear-gradient(90deg, #FDE68A, #F97316)';
      if (g.goalType.toLowerCase().includes('retire')) return 'linear-gradient(90deg, #93C5FD, #6366F1)';
      return 'linear-gradient(90deg, #6EE7B7, #3B82F6)';
    }

    categoryUsage(c: Category): number {
      if (!c.budgetedAmount || c.budgetedAmount === 0) return 0;
      return Math.round((c.actualAmount / c.budgetedAmount) * 100);
    }

    budgetAllocationPercent(): number {
      // sum of budgeted amounts as percent of income
      const totalBudgeted = this.plan.budget.categories.reduce((s, c) => s + c.budgetedAmount, 0);
      if (!this.plan.budget.monthlyIncome) return 0;
      return Math.round((totalBudgeted / this.plan.budget.monthlyIncome) * 100);
    }

    // --- SVG polyline helpers ---
    private normalize(values: number[], height = 40): number[] {
      const max = Math.max(...values, 1);
      return values.map(v => (height - (v / max) * height));
    }

    incomePolyline(): string {
      const values = this.plan.cashFlow.map(c => c.income);
      return this.pointsFrom(values);
    }

    expensesPolyline(): string {
      const values = this.plan.cashFlow.map(c => c.expenses);
      return this.pointsFrom(values);
    }

    private pointsFrom(values: number[]): string {
      const width = 200; // svg width
      const height = 40; // svg inner height
      const step = values.length > 1 ? width / (values.length - 1) : width;
      const norm = this.normalize(values, height);
      return norm.map((y, i) => `${i * step},${y + 5}`).join(' '); // +5 for top padding inside svg
    }

}
