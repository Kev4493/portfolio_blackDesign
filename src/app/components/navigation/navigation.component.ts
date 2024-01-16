import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {

  showMobileNavigationLinks() {
    let mobileNavigation = document.querySelector('.js-mobileNav');
    mobileNavigation.classList.toggle('show-nav');
  }

}

