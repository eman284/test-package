import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor() {}
  add(a: number, b: number): number {
    return a + b;
  }
}
