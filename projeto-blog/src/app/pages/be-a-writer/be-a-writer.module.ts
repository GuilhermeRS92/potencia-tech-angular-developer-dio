import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeContainerComponent } from './components/subscribe-container/subscribe-container.component';
import { BeAWriterComponent } from './be-a-writer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BeAWriterComponent,
    SubscribeContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BeAWriterModule { }
