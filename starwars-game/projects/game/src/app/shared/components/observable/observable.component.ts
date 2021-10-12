import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    console.info('-------------- 0 ');

    const promise = new Promise((resolve,  reject)=>{
      console.info('promise executé');
    })
    
    console.info('-------------- 1 ');
      const obs$=new Observable(observer=>{
      console.info('obs executée', Math.random());
      observer.next(1);

      observer.complete();

      for (let index = 0; index < 30; index++) {
        observer.next(index);
        
      }
        
      setTimeout(()=> {
        observer.next(Math.random()*1000);
      },0);


console.info('fin execution lobs');
    });

    console.info('-------------- 2 ');
    obs$.subscribe(item => console.info('callback', item));
    console.info('-------------- 3 ');
    obs$.subscribe();

    console.info('-------------- 4 ');
    const maFonc = (observer: any) => {
      console.info('obs 2 execute');
    }

    const obs2$=new Observable(maFonc);
    
    obs2$.subscribe();

    console.info('-------------- 5 ');

  }

}
