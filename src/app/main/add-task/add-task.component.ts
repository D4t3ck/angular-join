import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

}
