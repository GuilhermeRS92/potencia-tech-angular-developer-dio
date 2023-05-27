import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedPostComponent } from './component/featured-post/featured-post.component';
import { AdsContainerComponent } from './component/ads-container/ads-container.component';
import { ShowMorePostsComponent } from './component/show-more-posts/show-more-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    FeaturedPostComponent,
    AdsContainerComponent,
    ShowMorePostsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
