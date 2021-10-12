import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  critereRecherche: BehaviorSubject<string>= new BehaviorSubject<string>('');

  constructor() { }

  get(): Observable<string> {
    return this.critereRecherche;
  }

  recherche(s: string): void {
    this.critereRecherche.next(s);
  }

  unsubscribe(): void {
    this.critereRecherche.complete();
  }
}
