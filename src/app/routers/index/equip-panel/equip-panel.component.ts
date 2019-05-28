import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-equip-panel',
  templateUrl: './equip-panel.component.html',
  styleUrls: ['../index.component.css']
})
export class EquipPanelComponent implements OnInit {
  devCount:number;
  eleDevCount:number;
  otherDevCount:number;
  constructor() { }

  ngOnInit() {
    
  }
}
