import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OwnerEntity } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor(
  ) { }

  createDb() {
    const owners: Array<OwnerEntity> = []
    return { owners };
  }
  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.id!)) + 1 : 11
  }
}
