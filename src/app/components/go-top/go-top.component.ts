import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss']
})
export class GoTopComponent implements OnInit {

  app_title: string;
  app_version: number;

  constructor() {
    this.app_title = 'Angular';
    this.app_version = 1;
  }

  ngOnInit(): void {
  }

}
