import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
