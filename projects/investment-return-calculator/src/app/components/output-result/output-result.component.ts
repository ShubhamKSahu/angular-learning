import { Component, inject } from '@angular/core';
import { InvestmentService } from 'src/app/investment.service';

@Component({
  selector: 'app-output-result',
  standalone: false,
  templateUrl: './output-result.component.html',
  styleUrls: ['./output-result.component.css']
})
export class OutputResultComponent {
  private investmentService = inject(InvestmentService);

  get resultsData (){
     return this.investmentService.investmentResults
   }
  }

