import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchfilterPipe } from './sport/searchfilter';
import { TechnologyComponent } from './technology/technology.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FreshPipe } from './fresh.pipe';

const material = [
  MatPaginatorModule
];

@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
    routingComponents,
    TechnologyComponent,
    FreshPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
