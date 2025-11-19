import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navLinks = [
    {
      label: "Dashboard",
      path: "/dashboard"
    },
    // {
    //   label: "Onboarding",
    //   path: "/onboarding"
    // },
    {
      label: "Financial Planning",
      path: "/goals"
    },
    // {
    //   label: "Assets",
    //   path: "/assets"
    // },
    {
      label: "Investment Management",
      path: "/investment-management"
    },
    {
      label: "Advisory",
      path: "/advisory"
    },
    {
      label: "Profile",
      path:'/profile',

    },
    {
      label: "Settings",
      path:'/profile',
      sub: [
        { label: "General Settings", path: "/settings/general" },
        { label: "Payment Settings", path: "/settings/payments" },
        { label: "Security Settings", path: "/settings/security" }
      ]
    }
  ];
  isActive(path: string): boolean {
    return this.router.isActive(path, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }
  isAnySubItemActive(subItems: any[]): boolean {
    // Replace this logic with the actual condition to check if any sub-item is active
    return subItems.some(subItem => subItem.active);
  }
}
