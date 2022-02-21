import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private sidebarservice : SidebarService) { 

    this.menuItems = sidebarservice.menu;
    console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

}
