import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contakt',
  templateUrl: './contakt.component.html',
  styleUrls: ['./contakt.component.scss']
})
export class ContaktComponent implements OnInit {
  public mycolor = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:any) {
    this.mycolor = 'blue'
  }
}
