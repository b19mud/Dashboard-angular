import {Component, OnInit} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';


import {Router} from "@angular/router";

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit{

  menu = MENU_ITEMS;
  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.router.navigate(['pages/index']);
  }
}
