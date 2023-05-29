import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeContainerComponent } from './components/subscribe-container/subscribe-container.component';
import { BeAWriterComponent } from './be-a-writer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SucessMessageComponent } from './components/sucess-message/sucess-message.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BeAWriterComponent,
    SubscribeContainerComponent,
    SucessMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class BeAWriterModule { }
