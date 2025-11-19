import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  data = {
    userId: "USR001",

    // Personal info
    firstName: "John",
    lastName: "Doe",
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    dateOfBirth: "1988-09-25",
    contactNumber: "+1-202-555-0198",
    address: "123 Elm Street, Springfield, USA",

    // Risk profile
    riskTolerance: "Medium",

    // Financial Goals
    financialGoals: [
      {
        goalId: "G001",
        goalType: "Retirement",
        targetAmount: 750000,
        targetDate: "2050-01-01"
      },
      {
        goalId: "G002",
        goalType: "Emergency Fund",
        targetAmount: 20000,
        targetDate: "2026-01-01"
      }
    ],

    // Income & Expenses
    income: 95000,
    expenses: 48000,

    // Assets
    assets: [
      {
        assetId: "A001",
        assetType: "Property",
        value: 320000
      },
      {
        assetId: "A002",
        assetType: "Stock",
        value: 54000
      },
      {
        assetId: "A003",
        assetType: "Savings Account",
        value: 15000
      }
    ],

    // Liabilities
    liabilities: [
      {
        liabilityId: "L001",
        liabilityType: "Mortgage",
        amount: 210000
      },
      {
        liabilityId: "L002",
        liabilityType: "Credit Card Debt",
        amount: 3200
      }
    ]
  };
}


