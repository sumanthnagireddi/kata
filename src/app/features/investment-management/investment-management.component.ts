import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Investment Portfolio Component
 * Schema-based UI
 * Uses Tailwind CSS modern design
 */

// ------------------ Interfaces ------------------
interface Holding {
  holdingId: string;
  assetType: string;
  symbol: string;
  quantity: number;
  currentValue: number;
}

interface Performance {
  totalReturn: number;
  annualizedReturn: number;
  volatility: number;
}

interface RebalanceHistory {
  date: string;
  action: string;
  details: string;
}

interface Portfolio {
  portfolioId: string;
  userId: string;
  holdings: Holding[];
  riskProfile: string;
  performance: Performance;
  rebalancingHistory: RebalanceHistory[];
}
@Component({
  selector: 'app-investment-management',
  imports: [CommonModule],
  templateUrl: './investment-management.component.html',
  styleUrl: './investment-management.component.css'
})
export class InvestmentManagementComponent {


  // ------------------ Mock Data ------------------
   MOCK_PORTFOLIO: Portfolio = {
    portfolioId: 'pf-101',
    userId: 'user-123',
    riskProfile: 'Moderate',
    holdings: [
      {
        holdingId: 'h1',
        assetType: 'Stock',
        symbol: 'AAPL',
        quantity: 15,
        currentValue: 270000,
      },
      {
        holdingId: 'h2',
        assetType: 'Stock',
        symbol: 'TSLA',
        quantity: 5,
        currentValue: 180000,
      },
      {
        holdingId: 'h3',
        assetType: 'ETF',
        symbol: 'NIFTY50',
        quantity: 20,
        currentValue: 350000,
      },
      {
        holdingId: 'h4',
        assetType: 'Bond',
        symbol: 'GOVT10Y',
        quantity: 50,
        currentValue: 100000,
      },
    ],
    performance: {
      totalReturn: 12.4,
      annualizedReturn: 8.1,
      volatility: 4.7,
    },
    rebalancingHistory: [
      {
        date: '2025-02-15',
        action: 'Buy',
        details: 'Purchased 2 units of TSLA due to underweight allocation.'
      },
      {
        date: '2025-01-02',
        action: 'Sell',
        details: 'Sold 5 units of AAPL to reduce volatility exposure.'
      }
    ]
  };


    portfolio: Portfolio = this.MOCK_PORTFOLIO;

    riskBadgeColor() {
      switch (this.portfolio.riskProfile.toLowerCase()) {
        case 'high': return 'bg-red-500';
        case 'moderate': return 'bg-yellow-500';
        case 'low': return 'bg-green-600';
        default: return 'bg-slate-500';
      }
    }


}
