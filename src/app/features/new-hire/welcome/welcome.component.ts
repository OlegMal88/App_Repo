import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  hire = {
    name: 'Naomi',
    firstDate: '12.01.12'
  };

  constructor() { }

  ngOnInit() {
  }
}
