import { Component } from '@angular/core';
import {App, ViewController} from "ionic-angular";
import {AboutPage} from "../../pages/about/about";
import {PlacePage} from "../../pages/place/place";
import {CatalogPage} from "../../pages/catalog/catalog";

/**
 * Generated class for the DateNavComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'date-nav',
  templateUrl: 'date-nav.html'
})
export class DateNavComponent {

  text: string;
  isAboutPage: boolean = false;
  isPlacePage: boolean = false;
  isCatalogPage: boolean = false;

  constructor(public viewCtrl: ViewController, public app: App) {
    console.log('Hello DateNavComponent Component');

    if(this.viewCtrl.name == 'AboutPage') {
      this.isAboutPage = true;
    }
    if(this.viewCtrl.name == 'PlacePage') {
      this.isPlacePage = true;
    }
    if(this.viewCtrl.name == 'CatalogPage') {
      this.isCatalogPage = true;
    }

    console.log('Name of View:', this.viewCtrl.name);
  }

  openAboutUs() {
    this.app.getRootNav().push(AboutPage);
  }

  openPlacePage() {
    this.app.getRootNav().push(PlacePage);
  }

  openCatalog() {
    this.app.getRootNav().push(CatalogPage);
  }

}
