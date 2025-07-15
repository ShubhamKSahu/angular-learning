import { Component } from '@angular/core';
import { InvestmentInput } from './user-input.model';
import { InvestmentService } from 'src/app/investment.service';
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
 constructor(private investmentService: InvestmentService){};

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedInvestment,
      duration: +this.enteredDuration
    });

   this.enteredInitialInvestment = '0';
   this.enteredAnnualInvestment = '0';
   this.enteredExpectedInvestment = '0';
   this.enteredDuration = '0'
  }
}
