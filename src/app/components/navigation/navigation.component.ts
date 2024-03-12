import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {

  showMobileNavigationLinks() {
    let mobileNavigation = document.querySelector('.js-mobileNav');
    mobileNavigation.classList.toggle('show-nav');
  }

}

