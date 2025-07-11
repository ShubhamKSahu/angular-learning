import { Component, Output, EventEmitter } from '@angular/core';
import { InvestmentInput } from './user-input.model';
@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedInvestment = '0';
  enteredDuration = '0'
  @Output() calculate = new EventEmitter<InvestmentInput>();
  onSubmit(){
    this.calculate.emit({
      initialInvestment : +this.enteredInitialInvestment,
      annualInvestment : +this.enteredAnnualInvestment,
      expectedReturn : +this.enteredInitialInvestment,
      duration: +this.enteredDuration
    })
  }
}
