import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  show(path: string): void{
    this.router.navigateByUrl(path);
  }
}
