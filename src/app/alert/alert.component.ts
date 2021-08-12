import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() date: Date;

  constructor() { }

  ngOnInit() {
    console.log('Issue with the alert opening');
  }

}
