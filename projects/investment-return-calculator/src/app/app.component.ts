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
  investmentResults : {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[] = [];

calculateInvestmentResults(data: InvestmentInput) {
  const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
  const annualData = [];
  let investmentValue = initialInvestment;
  

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  //return annualData;
  this.investmentResults = annualData;
}
}
