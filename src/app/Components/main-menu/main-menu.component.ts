import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgbDropdownModule, NgbCollapseModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  isMenuCollapsed=true;
}
