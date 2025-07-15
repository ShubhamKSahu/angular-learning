import { Component } from '@angular/core';
import { InvestmentInput } from './components/user-input/user-input.model';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'investment-return-calculator';
}
