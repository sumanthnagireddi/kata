import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NgChartsConfiguration } from 'ng2-charts';
interface InvestmentCard {
  title: string;
  description: string;
  value: string;
  change?: string;
  iconBg: string;
  iconSvg: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards: InvestmentCard[] = [
    {
      title: 'Total Investment',
      description: '',
      value: '$350M',
      iconBg: 'bg-green-100',
      iconSvg: `<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V4m0 0L8 8m4-4l4 4M4 20h16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2z"/></svg>`
    },
    {
      title: 'Product Value',
      description: '',
      value: '13B',
      iconBg: 'bg-blue-100',
      iconSvg: `<svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>`
    },
    {
      title: 'Claimed Investment',
      description: '',
      value: '520',
      iconBg: 'bg-yellow-100',
      iconSvg: `<svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`
    },
    {
      title: 'Production Project',
      description: '',
      value: '154',
      iconBg: 'bg-purple-100',
      iconSvg: `<svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/></svg>`
    },
    {
      title: 'Total Project',
      description: '',
      value: '2.5M',
      iconBg: 'bg-pink-100',
      iconSvg: `<svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M7 7h10v10H7z"/></svg>`
    }
  ];
  summaryCards = [
    {
      icon: '💰',
      label: 'Total Investment',
      value: '$350M',
      trend: 'up'
    },
    {
      icon: '📦',
      label: 'Product Value',
      value: '13B',
      trend: 'down'
    },
    {
      icon: '🎯',
      label: 'Claimed Investment',
      value: '520',
      trend: 'up'
    },
    {
      icon: '🛠️',
      label: 'Production Project',
      value: '154',
      trend: 'down'
    },
    {
      icon: '📊',
      label: 'Total Project',
      value: '2.5M',
      trend: 'up'
    }
  ];

  topAssets = [
    { name: 'Apple', price: '168,71', change: '+14,34%' },
    { name: 'SpaceX', price: '233,99', change: '+11,24%' },
    { name: 'Google', price: '2,545,06', change: '-10,21%' },
    { name: 'Yahoo', price: '261,11', change: '+10,11%' }
  ];

  transactions = [
    {
      name: 'AMERICAN EXPRESS NATIONAL BANK',
      status: 'VTSAX',
      type: 'Funds Received',
      quantity: '-',
      price: '-',
      date: '06/29/20124',
      action: 'Action',
      checked: false
    },
    {
      name: 'VANGUARD TOTAL STOCK MARKET INDEX ADMIRAL CL',
      status: 'VTSAX',
      type: 'Buy',
      quantity: '807.766',
      price: '$70.52',
      date: '06/26/2024',
      action: 'Action',
      checked: true
    },
    {
      name: 'VANGUARD TOTAL STOCK MARKET INDEX ADMIRAL CL',
      status: 'VTSAX',
      type: 'Dividend',
      quantity: '-',
      price: '-',
      date: '06/20/2024',
      action: 'Action',
      checked: false
    },
    {
      name: 'VANGUARD TOTAL STOCK MARKET INDEX ADMIRAL CL',
      status: 'VTSAX',
      type: 'Reinvestment',
      quantity: '0.37360',
      price: '$125.00',
      date: '06/16/2024',
      action: 'Action',
      checked: false
    }
  ];

  // Chart.js line chart config for Portfolio performance
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [100, 200, 708.32, 600, 650, 700, 600, 650, 700, 800, 900],
        label: 'Portfolio',
        fill: true,
        tension: 0.4,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34,197,94,0.1)',
        pointBackgroundColor: '#22c55e',
        pointBorderColor: '#22c55e',
        pointRadius: 5,
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };
}
