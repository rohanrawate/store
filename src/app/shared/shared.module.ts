import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
