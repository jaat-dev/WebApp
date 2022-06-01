import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingress',
  templateUrl: './ingress.component.html',
  styleUrls: ['./ingress.component.css']
})
export class IngressComponent implements OnInit {

  modulo!: string;
  path: any;

  constructor(
    private activatedRoute: ActivatedRoute, private router:Router) {}


  ngOnInit(): void {
    this.path = this.router.routerState.snapshot.url.toString();
    console.log(this.path);
    this.modulo = this.activatedRoute.snapshot.url.toString();
    console.log(this.modulo);
  }

}
