import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() progress : number = 40;
  @Input() btnClass : string = 'btn btn-primary';

  @Output() valorSalda : EventEmitter<number> = new EventEmitter()

  get getProgress() {
      return this.progress + '%';
  }

  valores(val : number){

    if(this.progress >= 100 && val >= 0){
      this.valorSalda.emit(100)
      return this.progress = 100;
    }
    else if(this.progress <= 0 && val < 0){
      this.valorSalda.emit(0)
      return this.progress = 0;
    }
     this.progress = this.progress + val;
     return this.valorSalda.emit(this.progress)
  }

}
