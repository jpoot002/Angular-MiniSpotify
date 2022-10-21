import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private router:Router) { }

  routerLinkActive: string | string[]

  public GetBuscadorSearch(){
    this.router.navigate(['Search']);
  }

  public GetBuscadorLanzamientos(){
    this.router.navigate(['Spotify','Lanzamientos']);
  }

  public GetBuscadorCategorias(){
    this.router.navigate(['Spotify','Categorias']);
  }



}
