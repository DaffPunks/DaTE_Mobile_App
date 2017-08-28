import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {HomePage} from "../home/home";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController) {

  }

}
