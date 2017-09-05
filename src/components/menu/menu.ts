import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {App} from "ionic-angular";

import {AboutPage} from '../../pages/about/about';
import {HomePage} from '../../pages/home/home';
import {CatalogPage} from '../../pages/catalog/catalog';
import {PlacePage} from '../../pages/place/place';


@Component({
  selector: 'date-menu',
  templateUrl: 'menu.html',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({opacity: 0}),
            animate('200ms ease-in-out', style({'opacity': 1}))
          ]
        ),
        transition(
          ':leave', [
            style({'opacity': 1}),
            animate('200ms ease-in-out', style({'opacity': 0}))
          ]
        )
      ]
    ),
    //new animation here
  ],
})
export class MenuComponent {

  text: string;
  menuOpen: boolean = false;

  constructor(public app: App) {

    console.log('Hello Menu Component Component');
    this.text = 'Hello World';
  }


  openAboutUs() {
    this.app.getRootNav().push(AboutPage);
    this.menuOpen = false;
  }

  openPlacePage() {
    this.app.getRootNav().push(PlacePage);
    this.menuOpen = false;
  }

  openCatalog() {
    this.app.getRootNav().push(CatalogPage);
    this.menuOpen = false;
  }

  openHome() {
    this.app.getRootNav().setRoot(HomePage);
    this.menuOpen = false;
  }

  popNewPage() {
    this.app.getRootNav().pop();
    this.app.getRootNav();
  }
}
