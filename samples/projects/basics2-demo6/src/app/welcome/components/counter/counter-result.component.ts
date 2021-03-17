import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs';

@Component({
  selector: 'wed-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.scss']
})
export class CounterResultComponent implements OnInit, OnDestroy {
  private routeSubscription?: Subscription;
  result?: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.result = params.res;
    });
  }

  ngOnDestroy() {
    this.routeSubscription!.unsubscribe();
  }
}

