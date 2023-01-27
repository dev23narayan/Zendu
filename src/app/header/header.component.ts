import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItem:any[]=[
    {name:'Forms'},
    {name:'Customers'},
    {name:'Submissions'},
    {name:'History'},
    {name:'Reports'},
    {name:'Workflow'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
