import {Injectable, EventEmitter} from '@angular/core';
import {CounterModel} from '../models/counter-model';

@Injectable({providedIn: 'root'})
export class CounterService {
  private model?: CounterModel;
  public modelChanged: EventEmitter<CounterModel> = new EventEmitter<CounterModel>();

  public load(): void {
    this.model = new CounterModel();
    this.modelChanged.emit(this.model);
  }

  public up(): void {
    if (this.model) {
      this.model.count++;
      this.modelChanged.emit(this.model);
    }
  }
}

