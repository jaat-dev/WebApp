import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'WebApp';
  path!: string;
  modulo: any;

  constructor(
    private router: Router, 
    private activatedRouter: ActivatedRoute) {
  }

  ngOnit(): void {
    console.log("App-------------------")
    this.path = this.router.routerState.snapshot.url.toString();
    console.log(this.path);
    this.modulo = this.activatedRouter.snapshot.url.toString();
    console.log(this.modulo);
  }

}
