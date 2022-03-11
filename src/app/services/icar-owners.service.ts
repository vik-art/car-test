import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OwnerEntity } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ICarOwnersService {

  private ownersUrl = "/api/owners"

  constructor(
    private http: HttpClient
  ) { }

  createOwner(owner: OwnerEntity): Observable<OwnerEntity> {
    return this.http.post(this.ownersUrl, owner)
  }

  getAll(): Observable<Array<OwnerEntity>> {
    return this.http.get<Array<OwnerEntity>>(this.ownersUrl)
      .pipe(
        map((response: { [key: string]: any }) => {
          console.log(response)
          return Object
            .keys(response)
          .map(key => ({...response[key]}))
      })
    )
  }
}
