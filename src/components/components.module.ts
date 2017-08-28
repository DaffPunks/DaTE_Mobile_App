import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { MenuComponent } from './menu/menu';
@NgModule({
	declarations: [HeaderComponent,
    MenuComponent],
	imports: [],
	exports: [HeaderComponent,
    MenuComponent]
})
export class ComponentsModule {}
