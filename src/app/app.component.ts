import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotyfyService } from '../app/services/spotyfy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor( private spotyfyService:SpotyfyService ) {
  }

  ngOnInit(): void {
     
      this.spotyfyService.GetToken();
      this.spotyfyService.SetTtoken();
  };

  ngOnDestroy(){
      this.spotyfyService.RemoveToken();
  }

  title = 'MiniSpotify';
}
