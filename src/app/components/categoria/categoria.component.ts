import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public GetCategories:any;

  constructor(
    private router:ActivatedRoute,
    private spotyfyService:SpotyfyService) { }

  ngOnInit(): void {
    this.router.params.subscribe(
      params =>{
        console.log(params['idcategoria'] );
      }
    );

    this.spotyfyService.GetCategories()
    .subscribe((GetCategories:any) => {
      this.GetCategories = GetCategories;
      //console.log('GetCategories:',GetCategories );
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
    

    this.spotyfyService.GetNewgeturl("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFAXlCG6QvYQ4/playlists?country=SE&limit=10&offset=5")
    .subscribe((GetAlbumsTras:any) => {
      //console.log(GetAlbumsTras);
      
    }),(errorser)=> {
      console.log(errorser.error.error);
    }


    
    this.spotyfyService.GetNewgeturl("https://api.spotify.com/v1/playlists/37i9dQZF1DX37bXS7EGI3f/tracks")
    .subscribe((GetAlbumsTras:any) => {
      //console.log(GetAlbumsTras);    
    }),(errorser)=> {
      console.log(errorser.error.error);
    }


  }

}
