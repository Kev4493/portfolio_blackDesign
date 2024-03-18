import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SkillsComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent]
})
export class HomeComponent {

    constructor() { }

    ngAfterViewInit(): void {
        const dynamicText = document.querySelector(".js-home__greetingJob");
        const words = ["Frontend Developer", "Web Developer"];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeEffect = () => {
            const currentWord = words[wordIndex];
            const currentChar = currentWord.substring(0, charIndex);
            dynamicText.textContent = currentChar;
            dynamicText.classList.add('stop-blinking')

            if (!isDeleting && charIndex < currentWord.length) {
                // If condition is true, type the next character
                charIndex++;
                setTimeout(typeEffect, 100);
            } else if (isDeleting && charIndex > 0) {
                // If condition is true, remove the previous character
                charIndex--;
                setTimeout(typeEffect, 80);
            } else {
                // If word is deleted then switch to the next word
                isDeleting = !isDeleting;
                dynamicText.classList.remove('stop-blinking')
                wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
                setTimeout(typeEffect, 1200);
            }

        }

        typeEffect();
    }


}
