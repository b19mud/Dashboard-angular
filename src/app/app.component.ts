import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ui_height:number;
  ui_height_test:number = document.body.clientHeight || document.documentElement.clientHeight-51.51;
  
  constructor() {
    console.log(this.ui_height_test);
  }
  ngOnInit() {

  }
  setUI_Height(){
  }

  excahngeSide() {
    const target = document.querySelector('#ui_height');
    const wrap = document.querySelector('.col-md-10');
    wrap.classList.toggle('w97');
    target.classList.toggle('w0');
  }

}
