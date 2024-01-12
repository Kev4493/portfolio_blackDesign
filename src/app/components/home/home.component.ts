import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SkillsComponent]
})
export class HomeComponent {

}
