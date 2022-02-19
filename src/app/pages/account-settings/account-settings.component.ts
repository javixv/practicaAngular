import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  selectTheme = document.querySelector('#theme')
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme : string){
    

    
    const urls = `./assets/css/colors/${theme}.css`

    this.selectTheme?.setAttribute('href',urls)
    //console.log(urls)

    localStorage.setItem('theme', urls)
  }

}
