import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { ServerStatusComponent } from './component/dashboard/server-status/server-status.component';
import { TrafficComponent } from './component/dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './component/dashboard/support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./component/dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, SupportTicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
