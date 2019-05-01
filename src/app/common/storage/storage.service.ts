import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
  public store(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  public clear(): void {
    localStorage.clear();
  }
}
