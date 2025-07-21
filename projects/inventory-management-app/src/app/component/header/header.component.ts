import { Component } from '@angular/core';
import { ReusableButtonComponent } from '../reusable-button/reusable-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReusableButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
