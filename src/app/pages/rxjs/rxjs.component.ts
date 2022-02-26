import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent  {

  constructor() {

    
    this.reotrnaObservable().pipe(
        retry(1)
      ).subscribe(
        valor => console.log('Subs: ' + valor),
        error=> console.warn(error),
        () => console.info('observe terminado')
      );
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

   

  

}
