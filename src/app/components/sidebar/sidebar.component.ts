import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menu: Array<any>;

  constructor(private router: Router) {
    this.menu = [
      {
        header: 'Components',
        list_items: [
          {
            name: 'Usuarios',
            icon: 'fa fa-user',
            link: '/home',
            default: false,
          },
          {
            name: 'Calculadora',
            icon: 'fa fa-calculator',
            link: '/calculadora',
            default: false,
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}

  navigateTo(link) {
    this.router.navigate([link]);
  }
}
