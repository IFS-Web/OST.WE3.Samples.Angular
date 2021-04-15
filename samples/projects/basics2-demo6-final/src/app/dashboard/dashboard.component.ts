import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'wed-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  onButtonClick() {
    this.router.navigate([ '../welcome' ]);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}

