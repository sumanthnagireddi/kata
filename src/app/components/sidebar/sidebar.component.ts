import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   navLinks = [
    {
      label: "Dashboard",
      path: "/dashboard"
    },
    {
      label: "Charts",
      path: "/charts"

    },
    {
      label: "Settings",
      sub: [
        { label: "General Settings", path: "/settings/general" },
        { label: "Payment Settings", path: "/settings/payments" },
        { label: "Security Settings", path: "/settings/security" }
      ]
    }
  ];

}
