import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
