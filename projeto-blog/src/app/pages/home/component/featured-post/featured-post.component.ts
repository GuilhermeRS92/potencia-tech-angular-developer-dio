import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent implements OnInit{
  @Input() titlePost: string = ''
  @Input() datePost: string = ''
  @Input() tags: Array<string> = []
  @Input() imagePost: string = ''
  backgroundImage: string = ''

 ngOnInit(): void {
  this.backgroundImage = `url(${this.imagePost})`
 }
}