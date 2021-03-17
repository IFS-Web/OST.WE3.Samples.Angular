import {Component, OnInit} from '@angular/core';

import {CounterModel} from '../../shared/models/counter-model';

@Component({
  selector: 'wed-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: CounterModel = new CounterModel();

  constructor() {
  }

  ngOnInit() {
  }

  up(event: UIEvent): void {
    this.counter.count++;
    event.preventDefault();
  }
}

