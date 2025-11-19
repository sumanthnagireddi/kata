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
    "userId": "string",
    "name": "string",
    "email": "string",
    "dateOfBirth": "string",  // ISO 8601 date
    "contactNumber": "string",
    "address": "string",
    "riskTolerance": "string", // e.g., "Low", "Medium", "High"
    "financialGoals": [
      {
        "goalId": "string",
        "goalType": "string", // e.g., "Retirement", "Education"
        "targetAmount": "number",
        "targetDate": "string" // ISO 8601 date
      }
    ],
    "income": "number",
    "expenses": "number",
    "assets": [
      {
        "assetId": "string",
        "assetType": "string", // e.g., "Property", "Stock"
        "value": "number"
      }
    ],
    "liabilities": [
      {
        "liabilityId": "string",
        "liabilityType": "string", // e.g., "Mortgage", "Loan"
        "amount": "number"
      }
    ]
  }
}
