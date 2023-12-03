import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowItemsService {
  subject = new BehaviorSubject('');

  sendMsg(product: any) {
    console.log(product);
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
