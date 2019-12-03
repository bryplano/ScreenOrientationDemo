import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private screenOrientation: ScreenOrientation) {
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation changed to: " + this.screenOrientation.type.toString);
      }
   );
  }

  lockLandscape() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  unlockScreenOrientation(){
    this.screenOrientation.unlock();
  }
}
