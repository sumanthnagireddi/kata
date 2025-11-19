import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Recommendation {
  recommendationId: string;
  description: string;
  status: 'Pending' | 'Completed';
}

interface AdvisorySession {
  advisorySessionId: string;
  userId: string;
  advisorId: string;
  sessionType: string;
  date: string;
  notes: string;
  recommendations: Recommendation[];
}
@Component({
  selector: 'app-advisory',
  imports: [CommonModule],
  templateUrl: './advisory.component.html',
  styleUrl: './advisory.component.css'
})
export class AdvisoryComponent {



    session: AdvisorySession = {
      advisorySessionId: 'AS-98213',
      userId: 'USER-4471',
      advisorId: 'AI-Model-Prime-V2',
      sessionType: 'Chat',
      date: '2025-11-19T10:30:00',
      notes: `The AI assistant analyzed the user's spending, investment trends, and risk exposure.

  Key findings:
  - Increase SIP contribution by 10% for long-term goals.
  - Reduce High-risk exposure from 45% to 30%.
  - Shift idle cash into short-duration debt fund.
  - Improve emergency fund allocation to cover 6 months.`,
      recommendations: [
        {
          recommendationId: 'REC-101',
          description: 'Increase SIP by 10% to improve long‑term wealth compounding.',
          status: 'Pending',
        },
        {
          recommendationId: 'REC-102',
          description: 'Reduce high‑risk assets and reallocate into diversified index funds.',
          status: 'Pending',
        },
        {
          recommendationId: 'REC-103',
          description: 'Move idle cash into a short‑term debt mutual fund.',
          status: 'Completed',
        },
      ],
    };
  }

