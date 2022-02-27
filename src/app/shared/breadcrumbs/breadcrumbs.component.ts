import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulos !:string;
  public tituloSubs$ !: Subscription

  constructor(private router :Router) { 

    // this.router.events
    //     .pipe(
    //       filter((event): event is ActivationEnd => event instanceof ActivationEnd),
    //       filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
    //       map((event:ActivationEnd) => event.snapshot.data)
    //     )
    //     .subscribe(data => {
    //       this.titulos = data['titulo'];
    //       document.title = `AdminPro - ${data['titulo']}`
    //     })
        this.tituloSubs$ = this.alternativa().subscribe(data =>{
          this.titulos = data['titulo'];
          document.title = `AdminPro - ${data['titulo']}`
        })

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  alternativa(){
    return this.router.events
    .pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    )
  }

  

}
