import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent   {

  constructor() { }

  refresh(): void { window.location.reload(); }
  

}
