import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style_attr="height:"
  ui_height = "500px";
  currentStyles:{};
  setCurrentStyles(){
    var ui_height:any = document.documentElement.clientHeight || document.body.clientHeight;
    this.currentStyles={
      'height' : ui_height,
    };
  }

  constructor() {
    
  }
  ngOnInit() {

  }

}
