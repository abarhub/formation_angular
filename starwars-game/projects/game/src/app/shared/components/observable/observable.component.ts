import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'game-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit,OnDestroy {

subject = new Subject<boolean>();
droides$ !: Observable<string[]>;

  constructor() { }
  ngOnInit(): void {
    
    this.droides$=new Observable( observer =>{
        observer.next([
          'droide'+(Math.random()*100).toString(),
          'droide'+(Math.random()*100).toString(),
          'droide'+(Math.random()*100).toString()
        ]);
    });


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

    obs$
    .pipe(
      tap(item=> console.log('')),
      map(item=>item+'!!'),
      takeUntil(this.subject)
    )
    .subscribe();

    console.info('-------------- 4 ');
    const maFonc = (observer: any) => {
      console.info('obs 2 execute');
    }

    const obs2$=new Observable(maFonc);
    
    obs2$.subscribe();

    console.info('-------------- 5 ');

  }

  ngOnDestroy(): void {
    this.subject.next(true);
    this.subject.unsubscribe();
  }

}
