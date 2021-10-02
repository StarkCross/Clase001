import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clase001';

  constructor() {
    //console.log('step: constructor');
  }

  // ngOnChange
  ngOnChange() {
    //console.log('step: ngOnChange');
  }

  // ngOnInit
  ngOnInit() {
    //console.log('step: ngOnInit');
  }

  // ngDoCheck
  ngDoCheck() {
    //console.log('step: ngDoCheck');
  }

  // ngAfterContentInit
  ngAfterContentInit() {
    //console.log('step: ngAfterContentInit');
  }

  // ngAfterContentChecked
  ngAfterContentChecked() {
    //console.log('step: ngAfterContentChecked');
  }

  // ngAfterViewInit
  ngAfterViewInit() {
    //console.log('step: ngAfterViewInit');
  }

  // ngAfterViewChecked
  ngAfterViewChecked() {
    //console.log('step: ngAfterViewChecked');
  }

  // ngOnDestroy
  ngOnDestroy() {
    //console.log('step: ngOnDestroy');
  }
}
