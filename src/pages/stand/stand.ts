import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the StandPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stand',
  templateUrl: 'stand.html',
})
export class StandPage {
  name: string;
  address: string;
  phone: string;
  email: string;
  site: string;
  distibutor: string;
  stand: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let data = navParams.get('data');
    this.name       = data.title;
    this.address    = data.acf.address_scheda;
    this.phone      = data.acf.phone_scheda;
    this.email      = data.acf.email_scheda;
    this.site       = data.acf.website_scheda;
    this.distibutor = data.acf.marchi_scheda;
    this.stand      = data.acf.stand_scheda;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
