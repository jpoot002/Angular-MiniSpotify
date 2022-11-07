import { Component, OnInit,OnDestroy } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( 
    private spotyfyService:SpotyfyService,
    private router:ActivatedRoute 
    ) {
  }
  Newreleases: any[]=[];
  loading: boolean;
  GetCategories:any;
  Numero:number

  ngOnInit(): void {
    this.loading= true;
    this.router.params.subscribe(
      params =>{
        if (params['Titulo'] == "Lanzamientos") {
        this.Lanzamineto();
        this.Numero=1
        } else {
         this.categoria();
         this.Numero=2
        }
      }
    );
  };

  ngOnDestroy(): void {
    this.loading= true;
  }
  
  public Lanzamineto() {
    this.spotyfyService.GetNeWreleases()
    .subscribe((NeWreleases:any) => {
      this.Newreleases = NeWreleases;
      this.loading= false;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
  }

  public categoria(){
    this.spotyfyService.GetCategories()
    .subscribe((GetCategories:any) => {
      this.GetCategories = GetCategories;
      this.loading= false;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }


    this.spotyfyService.GetNewgeturl("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4/playlists?country=SE&limit=10&offset=5")
    .subscribe((GetAlbumsTras:any) => {
    }),(errorser)=> {
      console.log(errorser.error.error);
    }

    this.spotyfyService.GetNewgeturl("https://api.spotify.com/v1/playlists/37i9dQZF1DX37bXS7EGI3f/tracks")
    .subscribe((GetAlbumsTras:any) => {
      console.log(GetAlbumsTras);
    }),(errorser)=> {
      console.log(errorser.error.error);
    }

  }
}