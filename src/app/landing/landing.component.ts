import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  products = [
    {title: 'abc', src: ''},
    {title: 'abc1', src: ''},
    {title: 'abc', src: ''},
    {title: 'abc1', src: ''},
    {title: 'abc', src: ''},
    {title: 'abc1', src: ''},
    {title: 'abc', src: ''},
    {title: 'abc1', src: ''},
    {title: 'abc2', src: ''}
  ]

  constructor() { }

  ngOnInit() {
  }

}
