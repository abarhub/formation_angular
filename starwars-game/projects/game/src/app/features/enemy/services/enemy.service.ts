import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EnemyDto } from '../../../core/models/enemy';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<EnemyDto[]> {
    // const list: EnemyDto[] = [];
    
    // list.push({id: 1,name:'droide 1'});
    // list.push({id: 2,name:'droide 2'});

    // return of(list);
    return this.httpClient.get<EnemyDto[]>('uneurl');
  }
}
