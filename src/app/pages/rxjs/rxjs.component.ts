import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  miSuscripon : Subscription

  constructor() {

    
    // this.reotrnaObservable().pipe(
    //     retry(1)
    //   ).subscribe(
    //     valor => console.log('Subs: ' + valor),
    //     error=> console.warn(error),
    //     () => console.info('observe terminado')
    //   );

    this.miSuscripon = this.retornaIntervalo().subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.miSuscripon.unsubscribe();
  }


   reotrnaObservable() : Observable<number> {

     let i =-1

     return new Observable<number>(observer => {

      const intervalor = setInterval(()=>{

        i++;
        observer.next(i)
        if(i == 4){
          clearInterval( intervalor)
          observer.complete()
        }
        if(i == 2){
          observer.error('I =2')
        }
      },1000)
    })
   }


   retornaIntervalo(){
     return interval(1000)
              .pipe(
                //take(10),
                map(val => val +1)
                ,filter(val => (val % 2 == 0) ? true : false)
              )
   }

   

  

}
