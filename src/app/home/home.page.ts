import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {}

}
