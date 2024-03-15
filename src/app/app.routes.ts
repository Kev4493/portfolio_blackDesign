import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'imprint', component: LegalNoticeComponent },
    { path: 'checkout', component: CheckoutComponent },

];
