import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
import { WrapperComponent } from './wrapper/wrapper';
import { DateNavComponent } from './date-nav/date-nav';
import { DateMapComponent } from './date-map/date-map';
@NgModule({
	declarations: [HeaderComponent,
    MenuComponent,
    WrapperComponent,
    DateNavComponent,
    DateMapComponent],
	imports: [],
	exports: [HeaderComponent,
    MenuComponent,
    WrapperComponent,
    DateNavComponent,
    DateMapComponent]
})
export class ComponentsModule {}
