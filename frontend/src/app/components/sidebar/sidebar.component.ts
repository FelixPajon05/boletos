import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  create: boolean = false;
  cards: boolean = true;
  edit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  callTravels(){
    this.create = false;
    this.edit = false;
    this.cards = true;
  }

  callCreate(){
    this.cards = false;
    this.edit = false;
    this.create = true;
  }

  callEdit(){
    this.cards = false;
    this.create = false;
    this.edit = true;
  }

}