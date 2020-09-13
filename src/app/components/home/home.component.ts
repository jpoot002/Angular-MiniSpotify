import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private spotyfyService:SpotyfyService ) {
  }
  Newreleases: any[]=[];
  loading: boolean;

  ngOnInit(): void {
    this.loading= true;
    this.spotyfyService.GetNeWreleases()
    .subscribe((NeWreleases:any) => {
      this.Newreleases =NeWreleases;
      this.loading= false;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  };

}
