import { Component } from '@angular/core';
import { Post } from './models/posts.model';

@Component({
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent {
  postsList: Array<Post> = [
    {
      titlePost: 'Representing brand as the source for inspiration',
      datePost: 'Dec 28, 2022',
      tags: ['Fashion'],
      imagePost: '../../../../../assets/images/moda.jpg'
    },
    {
      titlePost: 'Fashion through the music',
      datePost: 'Dec 20, 2022',
      tags: ['Fashion', 'Music'],
      imagePost: '../../../../../assets/images/moda1.jpg'
    },
    {
      titlePost: 'Fashion through the theater',
      datePost: 'Sept 25, 2022',
      tags: ['Fashion', 'Theater'],
      imagePost: '../../../../../assets/images/moda2.jpg'
    }
  ]
  }
