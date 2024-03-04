import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.sass'
})
export class HabitsComponent {
 
  
}
