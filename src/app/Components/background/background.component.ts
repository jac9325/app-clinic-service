import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.sass'
})
export class BackgroundComponent {
  @Input() title: string= '';
  @Input() elements: string[]=[];

  constructor() { }

}
