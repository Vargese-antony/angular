import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages = [];
  constructor() {}

  ngOnInit(): void {
    // this.apiService.getMessages().subscribe(res => {
    //   this.messages = res;
    // });
  }

}
