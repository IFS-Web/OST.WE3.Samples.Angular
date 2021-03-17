import {Injectable, EventEmitter} from '@angular/core';
import {CounterModel} from '../models/counter-model';
import {CounterDataResourceService} from '../resources/counter-data-resource.service';

@Injectable({providedIn: 'root'})
export class CounterService {
  private model?: CounterModel;
  public modelChanged: EventEmitter<CounterModel> = new EventEmitter<CounterModel>();

  constructor() { // TODO
  }

  public load(): void {
    // TODO
    this.model = new CounterModel();
    this.modelChanged.emit(this.model);
  }

  public up(): void {
    // TODO
    this.model.count++;
    this.modelChanged.emit(this.model);
  }
}
