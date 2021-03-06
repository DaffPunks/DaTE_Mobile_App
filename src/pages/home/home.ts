import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { PlacePage } from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public app: App) {

  }

  openPlacePage() {
    this.app.getRootNav().push(PlacePage);
  }
}
