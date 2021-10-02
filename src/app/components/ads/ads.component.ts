import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  url_default: string = 'assets/img/undraw_rocket.svg';
  url_img_user: any;
  url_aux: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  showMessage() {
    // this.url_aux = this.url_img_user ? this.url_img_user : this.url_default;
    // let costo = (this.url_aux == 'ad') ? 10 : 20;
    // alert('hola event binding, costo: ' + costo);
    if (this.url_aux) {
      this.url_default = this.url_aux;
      this.url_aux = this.url_img_user;
    } else {
      this.url_aux = this.url_default;
      this.url_default = this.url_img_user;
    }
  }

}
