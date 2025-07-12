import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-result',
  standalone: false,
  templateUrl: './output-result.component.html',
  styleUrls: ['./output-result.component.css']
})
export class OutputResultComponent {
  @Input() resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];
}
