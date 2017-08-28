import { Component } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }

}
