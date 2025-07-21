import { Component } from '@angular/core';
import { ReusableButtonComponent } from '../../../reusable-button/reusable-button.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ReusableButtonComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

}
