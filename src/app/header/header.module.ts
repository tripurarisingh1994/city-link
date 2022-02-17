import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';



@NgModule({
  declarations: [DesktopHeaderComponent, MobileHeaderComponent],
  exports: [
    DesktopHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
