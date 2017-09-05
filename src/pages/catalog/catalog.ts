import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import { Http } from '@angular/http';

import {StandPage} from "../stand/stand";

/**
 * Generated class for the CatalogPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {
  @ViewChild('main') slides_main: Slides;
  @ViewChild('alph') slides_alph: Slides;
  data: any;

  alphabet: object = [
    '.', '8',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'w', 'x', 'y', 'z',
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public modalCtrl: ModalController) {
    this.http = http;

    this.http.get('http://dateyewear.com/wp-admin/admin-ajax.php?action=get_exhibitor_by_letter&letter=' + this.alphabet[0])
      .subscribe(data => {
        console.log(JSON.parse(data["_body"]));
        this.data = JSON.parse(data["_body"]);
      });

  }

  slideChanged() {
    let currentIndex = this.slides_alph.getActiveIndex();


    this.http.get('http://dateyewear.com/wp-admin/admin-ajax.php?action=get_exhibitor_by_letter&letter=' + this.alphabet[currentIndex])
      .subscribe(data => {
        console.log(JSON.parse(data["_body"]));
        this.data = JSON.parse(data["_body"]);
        this.slides_main.slideTo(0, 0);
      });


    console.log('Current index is', currentIndex);
  }

  clickTook(info) {
    let profileModal = this.modalCtrl.create(StandPage, {data: info});
    profileModal.present();
  }

}
