import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfileComponent } from './features/profile/profile.component';
import { GoalsComponent } from './features/goals/goals.component';
import { AdvisoryComponent } from './features/advisory/advisory.component';
import { InvestmentManagementComponent } from './features/investment-management/investment-management.component';
import { NotificationsComponent } from './features/notifications/notifications.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path:'profile',component:ProfileComponent},
      {path:'goals',component:GoalsComponent},
      {path:'advisory',component:AdvisoryComponent},
      {path:'investment-management',component:InvestmentManagementComponent},
      {path:'notifications',component:NotificationsComponent}
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup.component').then(m => m.SignupComponent)
  }
];
