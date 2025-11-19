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
      label: "Products",
      sub: [
        { label: "All Products", path: "/products" },
        { label: "Product Requests", path: "/products/requests" },
        { label: "New Product", path: "/products/new" },
        { label: "Archived Products", path: "/products/archived" }
      ]
    },
    {
      label: "Orders",
      sub: [
        { label: "All Orders", path: "/orders" },
        { label: "Pending Orders", path: "/orders/pending" },
        { label: "Completed Orders", path: "/orders/completed" },
        { label: "Cancelled Orders", path: "/orders/cancelled" }
      ]
    },
    {
      label: "Customers",
      path: "/users"
    },
    {
      label: "Categories & Collections",
      sub: [
        { label: "All Categories", path: "/categories" },
        { label: "Add Category", path: "/categories/new" },
        { label: "Collections", path: "/collections" }
      ]
    },
    {
      label: "Inventory",
      sub: [
        { label: "Inventory Overview", path: "/inventory" },
        { label: "Stock Alerts", path: "/inventory/alerts" },
        { label: "Restock Requests", path: "/inventory/restock-requests" }
      ]
    },
    {
      label: "Coupons & Promotions",
      sub: [
        { label: "All Coupons", path: "/coupons" },
        { label: "Create Coupon", path: "/coupons/new" },
        { label: "Promotions", path: "/promotions" }
      ]
    },
    {
      label: "Reviews",
      sub: [
        { label: "All Reviews", path: "/reviews" },
        { label: "Flagged Reviews", path: "/reviews/flagged" }
      ]
    },
    {
      label: "Returns & Refunds",
      sub: [
        { label: "Return Requests", path: "/returns/requests" },
        { label: "Refunds Issued", path: "/returns/refunds" }
      ]
    },
    {
      label: "Shipping & Logistics",
      sub: [
        { label: "Shipping Settings", path: "/shipping/settings" },
        { label: "Shipping Zones", path: "/shipping/zones" },
        { label: "Tracking Providers", path: "/shipping/providers" }
      ]
    },
    {
      label: "Vendors",
      sub: [
        { label: "All Vendors", path: "/vendors" },
        { label: "Vendor Requests", path: "/vendors/requests" },
        { label: "Vendor Performance", path: "/vendors/performance" }
      ]
    },
    {
      label: "CMS",
      sub: [
        { label: "Pages", path: "/cms/pages" },
        { label: "Banners", path: "/cms/banners" },
        { label: "SEO Settings", path: "/cms/seo" }
      ]
    },
    {
      label: "Reports & Analytics",
      sub: [
        { label: "Sales Report", path: "/reports/sales" },
        { label: "Customer Report", path: "/reports/customers" },
        { label: "Product Performance", path: "/reports/products" }
      ]
    },
    {
      label: "User Roles",
      path: "/roles"
    },
    {
      label: "Notifications",
      sub: [
        { label: "All Notifications", path: "/notifications" },
        { label: "Send Notification", path: "/notifications/send" }
      ]
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
