import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {App} from "ionic-angular";

import {AboutPage} from '../../pages/about/about';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
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

  constructor(
              public app: App) {

    console.log('Hello Menu Component Component');
    this.text = 'Hello World';
  }

  setNewPage() {
    this.app.getRootNav().push(AboutPage);
  }

  popNewPage() {
    this.app.getRootNav().pop();
    this.app.getRootNav();
  }
}
