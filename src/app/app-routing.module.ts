import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsPageModule)
  },
  {
    path: 'details-poke/:id',
    loadChildren: () => import('./details-poke/details-poke.module').then(m => m.DetailsPokePageModule)
  },
  {
    path: 'my-pokemons',
    loadChildren: () => import('./my-pokemons/my-pokemons.module').then(m => m.MyPokemonsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'pokemon-details-user',
    loadChildren: () => import('./pokemon-details-user/pokemon-details-user.module').then(m => m.PokemonDetailsUserPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
