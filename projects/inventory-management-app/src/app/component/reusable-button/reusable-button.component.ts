import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css'
})
export class ReusableButtonComponent {
@Input({required: true}) title !: string;
@Input({required: true}) icon!: string;
}
