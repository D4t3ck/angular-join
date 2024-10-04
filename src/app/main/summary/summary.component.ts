import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
