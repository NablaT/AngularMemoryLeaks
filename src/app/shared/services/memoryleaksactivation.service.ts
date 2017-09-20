import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class MemoryLeaksActivationService {

  public activateMemoryLeaks$: BehaviorSubject<boolean>;
  public memoryLeaksActivated = true;

  constructor() {
    this.activateMemoryLeaks$ = new BehaviorSubject(this.memoryLeaksActivated);
  }

  public activateDeactivateLeaks() {
    this.memoryLeaksActivated = !this.memoryLeaksActivated;
    this.activateMemoryLeaks$.next(this.memoryLeaksActivated);
  }
}
