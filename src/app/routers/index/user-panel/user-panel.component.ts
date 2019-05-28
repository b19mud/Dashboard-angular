import {Component, OnInit} from '@angular/core';

import {NbDateService} from "@nebular/theme";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['../index.component.css']
})


export class UserPanelComponent implements OnInit {
  userCount:number;
  userCountWeekly:number;
  userCountMonthly:number;
  constructor() {
  }
  
  ngOnInit() {
    
  }
}
