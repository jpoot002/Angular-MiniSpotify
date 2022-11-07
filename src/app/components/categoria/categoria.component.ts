import { Component, OnInit } from '@angular/core';
import { SpotyfyService } from '../../services/spotyfy.service'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public GetCategories:any;
  public paramsrouter:string;
  public GetAlbumsTras : any;
  public GetAlbumsIdTras:any;
  public GetAlbumsIdTras2:any;
  constructor(
    private router:ActivatedRoute,
    private spotyfyService:SpotyfyService) { }

  ngOnInit(): void {

    this.router.params.subscribe(
      params =>{
        this.paramsrouter = params['idcategoria']
      }
    );
    
    this.spotyfyService.GetCategoriesplaylists(this.paramsrouter)
    .subscribe((GetAlbumsTrass:any) => {
      this.GetAlbumsTras = GetAlbumsTrass;
    }),(errorser)=> {
      console.log(errorser.error.error);
    }


    /*
    this.spotyfyService.GetCategoriesplayliststracks('37i9dQZF1DWU8quswnFt3c')
    .subscribe((GetAlbumsTras:any) => {
      console.log(GetAlbumsTras);
      
    }),(errorser)=> {
      console.log(errorser.error.error);
    }
*/

  }

}
