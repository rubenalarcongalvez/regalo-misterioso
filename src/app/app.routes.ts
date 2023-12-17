import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DedicatoriasComponent } from './views/dedicatorias/dedicatorias.component';
import { LaExperienciaComponent } from './views/la-experiencia/la-experiencia.component';
import { PlacesComponent } from './views/places/places.component';
import { MapComponent } from './views/map/map.component';
import { HomeComponent } from './views/home/home.component';
import { GiftComponent } from './views/gift/gift.component';

export const routes: Routes = [
    {
        path: '', component: GiftComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'map', component: MapComponent
    },
    {
        path: 'places', component: PlacesComponent
    },
    {
        path: 'la-experiencia', component: LaExperienciaComponent
    },
    {
        path: 'dedicatorias', component: DedicatoriasComponent
    },
    {
        path: '**', redirectTo: ''
    },
];
