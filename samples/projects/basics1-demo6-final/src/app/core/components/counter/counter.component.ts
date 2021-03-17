import {Component, OnInit} from '@angular/core';

import {CounterModel} from '../../shared/models/counter-model';
import {CounterService} from '../../shared/services/counter.service';

@Component({
  selector: 'wed-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: CounterModel;

  constructor(private counterService: CounterService) {
    this.counter = counterService.load();
  }

  ngOnInit() {
  }

  up(event: UIEvent): void {
    this.counter = this.counterService.up();
    event.preventDefault();
  }
}

