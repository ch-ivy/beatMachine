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
  playSound(sound) {
    
    if (this.turnoff) {
      this.sounds = sound + ' turned off \n '
    }
    else{
      this.sounds = sound + ' ';
    sound = "../assets/sound/" + sound + ".mp3";
    sound && (new Audio(sound)).play()
    }
  }
  
  off(e) {
    console.log(e);
    this.turnoff = e.checked;
  }


}
