import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { PlacePage } from '../pages/place/place';
import { StandPage } from '../pages/stand/stand';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HeaderComponent } from '../components/header/header';
import { MenuComponent } from '../components/menu/menu';
import { WrapperComponent } from '../components/wrapper/wrapper';
import { DateNavComponent } from '../components/date-nav/date-nav';
import { DateMapComponent } from '../components/date-map/date-map';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HeaderComponent,
    MenuComponent,
    WrapperComponent,
    CatalogPage,
    PlacePage,
    StandPage,
    DateNavComponent,
    DateMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CatalogPage,
    PlacePage,
    StandPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
