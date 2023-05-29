import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit{
  @Input() titlePost: string = ''
  @Input() datePost: string = ''
  @Input() tags: Array<string> = []
  @Input() imagePost: string = ''
  backgroundImage: string = ''

  ngOnInit(): void {
   this.backgroundImage = `url(${this.imagePost})`
  }
}
