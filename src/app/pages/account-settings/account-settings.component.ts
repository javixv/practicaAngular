import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  selectTheme = document.querySelector('#theme')
  public links : NodeListOf<Element> = document.querySelectorAll('.selector')
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.currentTheme();
  }

  changeTheme(theme : string){
    

    
    const urls = `./assets/css/colors/${theme}.css`

    this.selectTheme?.setAttribute('href',urls)
    //console.log(urls)

    localStorage.setItem('theme', urls)

    this.currentTheme();
  }

  currentTheme(){
      

      this.links.forEach(element => {
        
        element.classList.remove('working')
        const btnTheme = element.getAttribute('data-theme')
        const btnthemeUrls = `./assets/css/colors/${btnTheme}.css`
        const currentThemes = this.selectTheme?.getAttribute('href')

        if(currentThemes === btnthemeUrls){
            element.classList.add('working')
        }
      });
  }

}
