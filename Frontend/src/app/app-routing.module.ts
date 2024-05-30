import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DonorComponent } from './pages/donation/donor/donor.component';
import { AddDonationComponent } from './pages/admin/add-donation/add-donation.component';
import { ViewDonationsComponent } from './pages/admin/view-donations/view-donations.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { AdminWelcomeComponent } from './pages/admin/admin-welcome/admin-welcome.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { MakeDonationComponent } from './pages/donation/make-donation/make-donation.component';
import { CheckoutComponent } from './pages/donation/checkout/checkout.component';
import { DonationNewComponent } from './pages/admin/donation-new/donation-new.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent,},
  { path: 'login', component: LoginComponent,},
  { path: 'register', component: RegisterComponent },
  //ADMIN ROUTING
  {
    path: 'admin',
    component: AdminWelcomeComponent,
    canActivate: [AdminGuardService],
    children: [
      // { path: '', component: AdminWelcomeComponent },
      {
        path: 'add-donation',
        component: AddDonationComponent,
        children: [{ path: 'new', component: DonationNewComponent }],
      },
      { path: 'view-donations', component: ViewDonationsComponent },
      { path: 'view-users', component: ViewUsersComponent },
    ],
  },
  // USER ROUTING
  {
    path: 'user',
    component: UserWelcomeComponent,
    children: [
      { path: 'donor', component: DonorComponent },
      { path: 'makedonation', component: MakeDonationComponent },
      { path: 'checkout', component: CheckoutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
