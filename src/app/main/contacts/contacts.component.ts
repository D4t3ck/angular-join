import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
