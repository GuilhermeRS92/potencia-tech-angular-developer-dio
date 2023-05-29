import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { FashionComponent } from './pages/fashion/fashion.component';
import { FashionModule } from './pages/fashion/fashion.module';
import { BeAWriterComponent } from './pages/be-a-writer/be-a-writer.component';
import { BeAWriterModule } from './pages/be-a-writer/be-a-writer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    FashionModule,
    BeAWriterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
