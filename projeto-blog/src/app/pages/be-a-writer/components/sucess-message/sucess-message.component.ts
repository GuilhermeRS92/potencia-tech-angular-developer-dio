import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucess-message',
  templateUrl: './sucess-message.component.html',
  styleUrls: ['./sucess-message.component.scss']
})
export class SucessMessageComponent {
  @Input() userName: string = ''; 
  @Input() userEmail: string = ''; 
}
