import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      console.error('error saving to localstorage', err);
    }
  }

  get(key: string): any {
    try {
      const data: any = localStorage.getItem(key);

      return JSON.parse(data);
    } catch (err) {
      console.error('error geting data from localstorage', err);
      return null;
    }
  }
}
