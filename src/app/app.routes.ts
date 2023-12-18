import { Routes } from '@angular/router';
import { DedicatoriasComponent } from './views/dedicatorias/dedicatorias.component';
import { LaExperienciaComponent } from './views/la-experiencia/la-experiencia.component';
import { MunicipiosComponent } from './views/municipios/municipios.component';
import { PaisesComponent } from './views/paises/paises.component';
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
        path: 'paises', component: PaisesComponent
    },
    {
        path: 'municipios', component: MunicipiosComponent
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
