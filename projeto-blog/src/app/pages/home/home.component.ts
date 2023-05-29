import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturedPost } from './models/featured-post.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featurePostInformations: FeaturedPost = {
    titlePost: 'Representing brand as the source for inspiration',
    datePost: 'Dec 28, 2022',
    tags: ['Fashion'],
    imagePost: '../../../../../assets/images/moda.jpg'
  }

  constructor(private router: Router){}

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url)
  }
}
