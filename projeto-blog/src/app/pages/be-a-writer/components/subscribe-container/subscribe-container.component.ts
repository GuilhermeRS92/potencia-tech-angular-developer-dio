import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-container',
  templateUrl: './subscribe-container.component.html',
  styleUrls: ['./subscribe-container.component.scss']
})
export class SubscribeContainerComponent {
  formSended: boolean = false;
  userName: string = '';
  userEmail: string = '';

  sendForm(){
    if(this.userName.length > 0 && this.userEmail.length > 0){
      this.formSended = !this.formSended
    } else if(this.userName.length <= 0 && this.userEmail.length <= 0) {
      alert("Please, tell us what's your name and yout contact!")
    } else if(this.userName.length <= 0){
      alert('You forgot to tell us your name!')
    } else if(this.userEmail.length <= 0){
      alert('You forgot to give us your contact!')
    }
  }
}
