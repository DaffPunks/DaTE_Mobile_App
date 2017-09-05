import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogPage } from './catalog';

import { Http } from '@angular/http';

@NgModule({
  declarations: [
    CatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogPage),
    Http
  ],
})
export class CatalogPageModule {}
