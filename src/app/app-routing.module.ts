import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { BillingComponent } from './billing/billing.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ApprovalComponent } from './approval/approval.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  { path: 'signup', component: RegistrationComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-bar', component: SearchComponent },
  { path: 'pending', component: ApprovalComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'product', component: EditProductComponent },
  { path: 'product/:code', component: EditProductComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'instructions', component: InstructionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
