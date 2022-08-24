import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contakt',
  templateUrl: './contakt.component.html',
  styleUrls: ['./contakt.component.scss']
})
export class ContaktComponent implements OnInit {
  public mycolor = 'rgb(122, 136, 45)';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: Event | string | any) {
    this.mycolor = 'rgb(75, 65, 114)'
  }
}
