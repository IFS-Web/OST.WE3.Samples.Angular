import {Component, OnDestroy, OnInit} from '@angular/core';

import {CounterModel} from '../../shared/models/counter-model';
import {CounterService} from '../../shared/services/counter.service';

@Component({
  selector: 'wed-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  counter?: CounterModel;

  constructor(private counterService: CounterService) {
    this.counter = counterService.load();
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  up(event: UIEvent): void {
    this.counter = this.counterService.up();
    event.preventDefault();
  }
}

