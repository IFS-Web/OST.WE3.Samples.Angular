import {Injectable} from '@angular/core';
import {CounterModel} from '../models/counter-model';

@Injectable({providedIn: 'root'})
export class CounterService {
  private model: CounterModel = new CounterModel();

  public load(): CounterModel {
    return this.model;
  }

  public up(): CounterModel {
    this.model.count++;
    return this.model;
  }
}

