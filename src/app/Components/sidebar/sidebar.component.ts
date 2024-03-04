import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgbCollapseModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  icon:string='fas fa-angle-double-right';

  toggleIcon(){
    this.icon = this.icon === 'fas fa-angle-double-right' ? 'fas fa-angle-double-left' : 'fas fa-angle-double-right';
  }
  isCollapsed=false;

 

  
  isExpanded: boolean = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}



// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'app-clinic-service';
//   toggleSidebar() {
//     const sidebar = document.querySelector("#sidebar");
//     if (sidebar) {
//       sidebar.classList.toggle("expand");
//     }
//   }

// }

// const hamBurger = document.querySelector(".toggle-btn");

// hamBurger.addEventListener("click", function () {
//   document.querySelector("#sidebar").classList.toggle("expand");
// });

