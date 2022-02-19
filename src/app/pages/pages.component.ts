import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  selectTheme = document.querySelector('#theme')

  constructor() { }

  ngOnInit(): void {

    const urls = localStorage.getItem('theme') || './assets/css/colors/default-dark.css'

    this.selectTheme?.setAttribute('href',urls)
  }

}
