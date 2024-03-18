import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [FooterComponent]
})
export class CheckoutComponent {

}
