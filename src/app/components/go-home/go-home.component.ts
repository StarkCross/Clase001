import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-go-home',
  templateUrl: './go-home.component.html',
  styleUrls: ['./go-home.component.scss']
})
export class GoHomeComponent implements OnInit {

  app_title: string;
  app_version: number;

  constructor() {
    this.app_title = 'Angular';
    this.app_version = 1;
  }

  ngOnInit(): void {
  }

}
