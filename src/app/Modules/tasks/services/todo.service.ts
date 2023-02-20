import { Injectable } from '@angular/core';

interface ILocalStorageService {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements ILocalStorageService {
  constructor() {}

  public get<T>(key: string): T {
    const localStorageValue: string | null = localStorage.getItem(key);
    if (localStorageValue === null) {
      return [] as unknown as T;
    } else {
      return localStorageValue as T;
    }
  }

  public set<T>(key: string, value: T): void {
    let valueToStore: string = JSON.stringify(value);

    if (value === null) {
      this.remove(key);
      return;
    }

    // if (Array.isArray(value)) {
    //     valueToStore = JSON.stringify(value as any);
    // }
    // else {
    //     switch (typeof value) {
    //         case "string":
    //             valueToStore = value;
    //             break;
    //         case "number":
    //         case "boolean":
    //             valueToStore = value.toString();
    //             break;
    //         case "object":
    //             if (value instanceof Date) {
    //                 valueToStore = value.getTime().toString();
    //             }
    //             else {
    //                 valueToStore = JSON.stringify(value as any);
    //             }
    //             break;
    //     }
    // }

    if (valueToStore) {
      localStorage.setItem(key, valueToStore);
    } else {
      this.remove(key);
    }
  }

  private remove(key: string): void {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  }
}
