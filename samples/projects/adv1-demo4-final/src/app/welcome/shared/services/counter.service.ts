import {Injectable, EventEmitter} from '@angular/core';
import {CounterModel} from '../models/counter-model';
import {CounterDataResourceService} from '../resources/counter-data-resource.service';

@Injectable()
export class CounterService {
  private model?: CounterModel;
  public modelChanged: EventEmitter<CounterModel> = new EventEmitter<CounterModel>();

  constructor(private dataResource: CounterDataResourceService) {
  }

  public load(): void {
    this.dataResource.get().subscribe(
      (data) => this.modelChanged.emit(data));
  }

  public up(): void {
    this.dataResource.sendUp().subscribe(
      (data) => this.modelChanged.emit(data));

  }
}
