import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { CategoriaComponent} from './components/categoria/categoria.component'



const routes: Routes = [
  { path: 'Spotify/:Titulo', component: HomeComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Spotify/:tipo/:id', component: ArtistaComponent },
  { path: 'Spotify/Categorias/Categoria/:idcategoria', component: CategoriaComponent },
  { path: '', pathMatch: 'full', redirectTo:'Spotify/Lanzamientos' },
  { path: '**', pathMatch: 'full', redirectTo:'Spotify/Lanzamientos' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
