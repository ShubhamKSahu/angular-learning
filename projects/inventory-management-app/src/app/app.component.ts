import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ServerStatusComponent } from './component/server-status/server-status.component';
import { TrafficComponent } from './component/traffic/traffic.component';
import { SupportTicketsComponent } from './component/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
