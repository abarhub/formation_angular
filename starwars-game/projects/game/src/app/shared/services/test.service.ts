import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null//'root'
})
export class TestService {

  key: number=0;

  constructor() { 
    //console.time('test');
  console.info('TestService : test');
  this.key=(Math.random())*100;
  }
  
}
