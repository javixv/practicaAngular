import { Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {

  progress : number = 40;

  get getProgress() {
      return this.progress + '%';
  }

  valores(val : number){

    if(this.progress >= 100 && val >= 0){
      return this.progress = 100;
    }
    else if(this.progress <= 0 && val < 0){
      return this.progress = 0;
    }
    return this.progress = this.progress + val;
  }

}
