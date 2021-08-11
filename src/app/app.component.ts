import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(DashboardComponent) dashBoard: DashboardComponent;
  title = 'app';

  refresh() {
    this.dashBoard.generateData();
  }
}
