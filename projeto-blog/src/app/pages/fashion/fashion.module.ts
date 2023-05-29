import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostContainerComponent } from './components/post-container/post-container.component';
import { FashionComponent } from './fashion.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FashionComponent,
    PostContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FashionModule { }
