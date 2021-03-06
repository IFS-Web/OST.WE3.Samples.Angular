import {Component, OnDestroy, OnInit} from '@angular/core';

import {CounterModel} from '../../shared/models/counter-model';
import {CounterService} from '../../shared/services/counter.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'wed-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter?: CounterModel;
  private counterSubscription?: Subscription;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterSubscription = this.counterService.modelChanged.subscribe((model: CounterModel) => {
      this.counter = model;
    });
    this.counterService.load();
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }

  up(event: UIEvent): void {
    this.counterService.up();
    event.preventDefault();
  }
}

