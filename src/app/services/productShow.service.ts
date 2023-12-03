import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductShowService {
  subject = new BehaviorSubject('');

  sendMsg(product: any) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
