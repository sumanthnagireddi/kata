import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NotificationItem {
  notificationId: string;
  userId: string;
  type: string;
  message: string;
  date: string;
  read: boolean;
}
@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {



  notifications: NotificationItem[] = [
    {
      notificationId: 'N001',
      userId: 'USR001',
      type: 'GoalProgress',
      message: 'You have achieved 75% of your Savings Goal!',
      date: '2025-11-10',
      read: false
    },
    {
      notificationId: 'N002',
      userId: 'USR001',
      type: 'InvestmentOpportunity',
      message: 'A new high-performing ETF matches your risk profile.',
      date: '2025-11-08',
      read: true
    },
    {
      notificationId: 'N003',
      userId: 'USR001',
      type: 'GoalProgress',
      message: 'Your Emergency Fund has grown by 5% this month.',
      date: '2025-11-05',
      read: true
    }
  ];

}
