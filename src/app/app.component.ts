import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ui_height:number;
  ui_height_test:any = document.body.clientHeight || document.documentElement.clientHeight;
  constructor() {
    console.log(this.ui_height_test);
  }
  ngOnInit() {

  }
  setUI_Height(){
  }

}
