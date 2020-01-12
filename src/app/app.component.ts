import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beatDemo';
  sounds = "";
  turnoff: boolean = false;
 
  
  off(e) {
    console.log(e);
    this.turnoff = e.checked;
  }


}
