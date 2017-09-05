import { Component } from '@angular/core';
import {App, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  openMap: boolean = false;

  constructor(public app: App) {

  }

  openPlacePage() {
    this.app.getRootNav().push(PlacePage);
  }
}
