import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  modulo!: string;

  constructor(
    private activatedRoute: ActivatedRoute) {}


  ngOnInit(): void {
    //console.log("Sidebar-----");
    this.modulo = this.activatedRoute.snapshot.url.toString();
    //console.log(this.modulo);
  }

}
